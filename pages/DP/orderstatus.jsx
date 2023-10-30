import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Home/header";
import {useSession} from "next-auth/react";

function OrderDetails() {
  const { data : session } = useSession();
  const router = useRouter();

  
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
   
  let name = "";
  let useremail = "";
  if(session){
    name = session.user.name;
    useremail = session.user.email;
  }
  


  
  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        try {
          let msg = "userbookingdata";
          const response = await axios.get(
            `/api/bookingHandler?email=${useremail}&messagecode=${msg}`
          );

          if (response.statusCode !== 200) {
            console.log(response.statusCode);
          }

          const data = await response.data;
          setUserData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error in retrieving data:", error);
        }
      };

      fetchUserData();
    }
  }, [session, name]);

  

  if (!session) {
    return (
      <div className="loading">
        <h2 className="topicstyle">You are not logged in.</h2>
        <p>Please log in to view your order details.</p>
      </div>
    );
  }

  if (loading) {
    return (
      
      <div className="loading">
        <h2 className="topicstyle">Loading...</h2>
        <div class="spinner">
          <div class="spinner1"></div>
        </div>
      </div>
    );
  }

  if (userData.length === 0) {
    return <div className="card">
      <div className="homeblank"></div>
      <Header/>
      <text className="title title2">Nothing to show....</text>
      </div>; // Display a message if no data is found
  }
  /*______________Delete Handling_______________ */
  const deletebkdata = async(dID) =>{
    
    try{
      const response = await axios.delete(`/api/bookingHandler?did=${dID}`);
      if(response.status===200){
        console.log("deleted");
        router.reload();
      } else {console.log("error in response");}
    }catch (error) {console.error("Error in deleting", error);}
  }
  

  return (
    <>
    <Header/>
      <div className="homeblank"></div>
      <div className="wholecontainer">
        <div className="dataintro">
          <h1 className="title">{name}'s</h1>
        </div>
        <div className="">
          <h2 className="title">Booking Details</h2>
          <div className="user-data-container">
            {userData.map((userItem, index) => (
              <div key={index._id} className="user-data">
                <h4 className="title3">Name: {userItem.name}</h4>
                <h6 className="title3">Email: {userItem.email}</h6>
                <h6 className="title3">Mobile: {userItem.mobile}</h6>
                <h6 className="title3">Address: {userItem.address}</h6>
                <h6 className="title3">
                  Function Type: {userItem.functionType}
                </h6>
                <h6 className="title3">
                  Services:{" "}
                  {Array.isArray(userItem.selectedServices)
                    ? userItem.selectedServices.join(", ")
                    : "N/A"}
                </h6>
                <h6 className="title3">Message: {userItem.msg}</h6>
                <h6 className="title3">Time: {userItem.time}</h6>
                <h6 className="title3">Status : {userItem.status}</h6>
                <h6 className="title3">Payments : {userItem.payment}</h6>
                <div className="crud">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                    className="delete-logo"
                    onClick={() =>deletebkdata(userItem._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
