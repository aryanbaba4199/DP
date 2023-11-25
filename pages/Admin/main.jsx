import React, { useEffect, useState } from "react";
import Header from "../Home/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const AdminPanel = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user.email === "aryanbaba4199@gmail.com") {
        try {
          const bkDatares = await axios.get("/api/admin");
          if (bkDatares.status === 200) {
            setBookingData(bkDatares.data);
          }
        } catch (error) {
          console.error("Error fetching booking data:", error.message);
        }
      } else {
        router.push("/");
      }
    };

    fetchData();
  }, [session, router]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/${id}`);
      // Refresh the booking data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className="container flex p-2 mx-auto mt-5">
        {bookingData ? (
          <div className="w-full">
            <h1 className=" text-white text-3xl font-bold mb-4">Booking Data</h1>
            {bookingData.reverse().map((booking) => (
              <div key={booking._id} className="bg-gray-100 p-2 mb-4 rounded-md">
                <p className="text-xl font-bold mb-2">Client Name : {booking.name}</p>
                <p className="text-gray-600 mb-2">Email : {booking.email}</p>
                <p className="text-gray-600 mb-2">Mobile : {booking.mobile}</p>
                <p className="text-gray-600 mb-2">Address: {booking.address}</p>
                <p className="text-gray-600 mb-2">Function Type: {booking.selectedFunctionType}</p>
                <p className="text-gray-600 mb-2">Message : {booking.msg}</p>
                <p>Selected Services are : </p>
                {booking.selectedServices.map((service) =>(
                  <ul>
                    <li text-gray-600 mb-2>{service}</li>
                  </ul>
                ))}
                <p className="text-gray-600 mb-2">Time: {booking.time}</p>
                <p className="text-gray-600 mb-2">Status: {booking.status}</p>
                <p className="text-gray-600 mb-2">Payment: {booking.payment}</p>

                {/* Add more details as needed */}
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default AdminPanel;
