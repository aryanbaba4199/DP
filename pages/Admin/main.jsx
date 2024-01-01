import React, { useEffect, useState } from "react";
import Header from "../Home/header";
import {auth} from "../../utils/firebaseAuth";
import { useRouter } from "next/router";
import axios from "axios";

const AdminPanel = () => {
  const [expenditureInputs, setExpenditureInputs] = useState({});
  const [showAddRecord, setShowAddRecord] = useState(false);
  const router = useRouter();
  
  const [bookingData, setBookingData] = useState(null);
  const [editedBooking, setEditedBooking] = useState({
    name: "",
  });
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [newExpenditureName, setNewExpenditureName] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");

  const fetchData = async () => {
    if (auth.currentUser.email === "aryanbaba4199@gmail.com") {
      try {
        const bkDatares = await axios.get("/api/admin");
        
        if (bkDatares.status === 200) {
          setBookingData(bkDatares.data);
        }
      } catch (error) {
        console.error("Error fetching booking data:", error.message);
      }
    } 
  };

  useEffect(() => {
    fetchData();
  }, [auth.currentUser, router]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin?id=${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  const handleCreateRecord = async () => {
    if (activeOrderId) {
      
      try {
        const response = await axios.post("/api/addRecord", {
          id: activeOrderId,
          expenditureName: expenditureInputs[activeOrderId]?.name || "",
          expenseAmount: expenditureInputs[activeOrderId]?.amount || "",
        });

        if (response.status === 200) {
          fetchData();
          setExpenditureInputs((prevInputs) => ({
            ...prevInputs,
            [activeOrderId]: {},
          }));
          setActiveOrderId(null);
          setShowAddRecord(false); // Close the add record form after creating the record
        }
      } catch (error) {
        console.error("Error creating record:", error.message);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/admin?id=${editedBooking._id}`, editedBooking);
      fetchData();
      setEditedBooking({
        _id: null,
        name: "",
      });
    } catch (error) {
      console.error("Error updating booking:", error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleUpdateClick = (booking) => {
    setEditedBooking({ ...booking });
  };

  const handleExpenditureInputChange = (id, name, value) => {
    setExpenditureInputs((prevInputs) => ({
      ...prevInputs,
      [id]: {
        ...prevInputs[id],
        [name]: value,
      },
    }));
  };

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className="flex p-2 mx-auto mt-5">
        {bookingData ? (
          <div className="w-full">
            <h1 className="text-white text-3xl font-bold mb-4">Booking Data</h1>
            {bookingData.map((booking) => (
              <div
                key={booking._id}
                className="bg-gray-100 p-2 mb-4 rounded-md"
              >
                <p className="text-xl font-bold mb-2">
                  Client Name :{" "}
                  {editedBooking._id === booking._id ? (
                    <input
                      type="text"
                      name="name"
                      value={editedBooking.name}
                      onChange={handleInputChange}
                      className="bg-blue-200 p-1 rounded-lg"
                    />
                  ) : (
                    booking.name
                  )}
                </p>
                <p className="text-gray-600 mb-2">Email : {booking.email}</p>
                <p className="text-gray-600 mb-2">Mobile : {booking.mobile}</p>
                <p className="text-gray-600 mb-2">Address: {booking.address}</p>

                <div>
                  {editedBooking._id === booking._id ? (
                    <>
                      <button
                        onClick={() => handleUpdate()}
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() =>
                          setEditedBooking({
                            _id: null,
                            name: "",
                          })
                        }
                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleUpdateClick(booking)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setShowAddRecord(true);
                      setActiveOrderId(booking._id); // Set the active order ID
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Add Record
                  </button>
                </div>

                {activeOrderId === booking._id && (
                  <div>
                    <input
                      type="text"
                      placeholder="Expenditure Name"
                      value={expenditureInputs[activeOrderId]?.name || ""}
                      onChange={(e) =>
                        handleExpenditureInputChange(
                          activeOrderId,
                          "name",
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="text"
                      placeholder="Expense Amount"
                      value={expenditureInputs[activeOrderId]?.amount || ""}
                      onChange={(e) =>
                        handleExpenditureInputChange(
                          activeOrderId,
                          "amount",
                          e.target.value
                        )
                      }
                    />
                    <button onClick={handleCreateRecord}>Create</button>
                  </div>
                )}
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
