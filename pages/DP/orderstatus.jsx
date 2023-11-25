import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Home/header";
import { useSession } from "next-auth/react";
import { TiStarburst } from "react-icons/ti";


function OrderDetails() {
  const { data: session } = useSession();
  const router = useRouter();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  let name = "";
  let useremail = "";
  if (session) {
    name = session.user.name;
    useremail = session.user.email;
  }

  const expBtn = (id) =>{
    router.push(`/DP/accounting?id=${id}`);
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

  const deletebkdata = async (dID) => {
    try {
      const response = await axios.delete(`/api/bookingHandler?did=${dID}`);
      if (response.status === 200) {
        console.log("deleted");
        router.reload();
      } else {
        console.log("error in response");
      }
    } catch (error) {
      console.error("Error in deleting", error);
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You are not logged in.</h2>
          <p>Please log in to view your order details.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <div className="animate-spin h-8 w-8  border-t-4 mx-8 rounded-full border-slate-950"></div>
        </div>
      </div>
    );
  }

  if (userData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Nothing to show....</h2>
        </div>
      </div>
    );
  }
  

  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto p-8">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-3xl font-bold mb-8">{name}'s Booking Details</h1>
            <div className=" flex flex-wrap gap-8 ">
              {userData.map((userItem) => (
                <div key={userItem._id} className="border p-4 rounded shadow">
                  <h4 className="text-xl font-bold mb-2">Name: {userItem.name}</h4>
                  <p className="text-gray-600 mb-2">Email: {userItem.email}</p>
                  <p className="mb-2">Mobile: {userItem.mobile}</p>
                  <p className="text-gray-600 mb-2">Address: {userItem.address}</p>
                  <p className="text-gray-600 mb-2">
                    Function Type: {userItem.selectedFunctionType}
                  </p>
                  <p className="mb-2">
                    Services:{" "}
                    <span className="text-gray-600">
                      {Array.isArray(userItem.selectedServices)
                        ? userItem.selectedServices.join(", ")
                        : "N/A"}
                    </span>
                  </p>
                  <p className="text-gray-600 mb-2">Message: {userItem.msg}</p>
                  <p className="text-gray-600 mb-2">Time: {userItem.time}</p>
                  <p className="text-lime-600 mb-2 font-semibold">Status: {userItem.status}</p>
                  <p className="text-gray-600 mb-2">Total Paid : {userItem.payment}</p>

                  <span className="text-lg flex font-semibold p2"> <TiStarburst className="my-1 p-1" />Fund Details </span>
                  

                  
                        
                  <div className="flex justify-end">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                      alt="delete icon"
                      className="hover:cursor-pointer"
                      width={30}
                      onClick={() => deletebkdata(userItem._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
