import React, { useEffect, useState } from "react";
import Header from "../Home/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const AdminPanel = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [bookingData, setBookingData] = useState(null);
  const [editedBooking, setEditedBooking] = useState(null);

  
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
      await axios.delete(`/api/admin?id=${id}`);
      
      fetchData();
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(`/api/admin?id=${id}`, editedBooking);
      
      fetchData();
      setEditedBooking(null); // Reset the edited booking state
    } catch (error) {
      console.error("Error editing booking:", error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleEditClick = (booking) => {
    setEditedBooking(booking);
  };

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className="container flex p-2 mx-auto mt-5">
        {bookingData ? (
          <div className="w-full">
            <h1 className="text-white text-3xl font-bold mb-4">Booking Data</h1>
            {bookingData.reverse().map((booking) => (
              <div key={booking._id} className="bg-gray-100 p-2 mb-4 rounded-md">
                {/* Display Booking Details */}
                <p className="text-xl font-bold mb-2">Client Name : {booking.name}</p>
                <p className="text-gray-600 mb-2">Email : {booking.email}</p>
                <p className="text-gray-600 mb-2">Mobile : {booking.mobile}</p>
                <p className="text-gray-600 mb-2">Address: {booking.address}</p>
                {/* ... (Other details) */}

                {/* Edit Form */}
                {editedBooking && editedBooking._id === booking._id && (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={editedBooking.name}
                      onChange={handleInputChange}
                    />
                    {/* Add other input fields for other details */}
                    <button onClick={() => handleEdit(booking._id)}>Save</button>
                  </div>
                )}

                {/* Action Buttons */}
                <button
                  onClick={() => handleEditClick(booking)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
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
