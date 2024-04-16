import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Home/header";
import { auth } from "../../utils/firebaseAuth";
import { TiStarburst } from "react-icons/ti";

function OrderDetails() {
  const router = useRouter();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  let name = "";
  let useremail = "";
  if (auth.currentUser) {
    name = auth.currentUser.displayName;
    useremail = auth.currentUser.email;
  }

  const expBtn = (id) => {
    router.push(`/DP/accounting?id=${id}`);
  };

  useEffect(() => {
    if (auth.currentUser) {
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
  }, [auth.currentUser, name]);

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

  if (!auth.currentUser) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">You are not logged in.</h2>
            <p>Please log in to view your order details.</p>
          </div>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
      <Header />
        {" "}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>
            <div className="animate-spin h-8 w-8  border-t-4 mx-8 rounded-full border-slate-950"></div>
          </div>
        </div>
      </>
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
            <h1 className="text-3xl text-center font-bold mb-8">
              {name}'s Booking Details
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {userData.map((userItem) => (
                <div key={userItem._id} className="border p-4 rounded shadow">
                  <h4 className="text-xl font-bold mb-2">
                    Name: {userItem.name}
                  </h4>
                  <p className="text-gray-600 mb-2">Email: {userItem.email}</p>
                  <p className="mb-2">Mobile: {userItem.mobile}</p>
                  <p className="text-gray-600 mb-2">
                    Address: {userItem.address}
                  </p>
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
                  <p className="text-lime-600 mb-2 font-semibold">
                    Status: {userItem.status}
                  </p>
                  <p className="text-gray-600 mb-2">
                     Booking Fee Paid : {(((userItem.budget * 10) / 100))}/-
                  </p>

                  <span className="text-lg flex font-semibold p2">
                    {" "}
                    <TiStarburst className="my-1 p-1" />
                    Fund Details{" "}
                  </span>

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
