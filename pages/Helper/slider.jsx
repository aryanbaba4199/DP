import React, { useEffect, useState } from "react";
import {auth} from  "../../utils/firebaseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const blankStar = "https://cdn-icons-png.flaticon.com/256/16/16666.png";
const filledStar =
  "https://cdn-icons-png.flaticon.com/256/1828/1828884.png";

function FeedbackForm() {

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  // Getting commenter details
  let name = "Guest";
  let email = "guest";
  if (auth.currentUser) {
    name = auth.currentUser.displayName;
    email = auth.currentUser.email;
  }

  // Storing Feedback
  const feedbackSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/feedbackHandler",
        { name, email, rating, feedback },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Success");
        toast("Thank you for your feedback");
      }
    } catch (e) {
      console.log("Error: " + e.message);
    }
  };

  return (
    
    <div className=" mt-8 shadow-lg w-[90%] ml-5 md:ml-16  shadow-blue-500 text-white p-4 md:p-8  justify-center items-start md:items-center  rounded-3xl">
      <p className="text-xl md:text-2xl font-bold mb-4
      md:translate-x-12 translate-x-0 mt-8 bg-gradient-to-r bg-clip-text text-transparent from-slate-950 via-purple-600">Please rate your experience</p>
      <div className="card4 p-4 md:p-8 shadow-md flex flex-col md:flex-row justify-between">
        <div className=" flex gap-2 items-center">
        {Array.from({ length: 5 }, (_, index) => (
  <img
    key={index}
    className="w-8 cursor-pointer rounded-full"
    src={index < rating ? filledStar : blankStar}
    alt={`Star ${index + 1}`}
    onClick={() => handleStarClick(index + 1)}
  />
))}

        </div>
        <div className="input-container mt-4 md:mt-0 md:ml-4 flex-1">
          <input
            placeholder="write feedback here..."
            className="input-field w-full p-2 border border-gray-300 rounded"
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <label htmlFor="input-field" className="block text-white text-sm mt-1">
            Share Your Experience
          </label>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
            onClick={feedbackSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <p className="text-lg mt-4 md:mt-8">You rated: {rating} stars</p>
      <ToastContainer />
    </div>
  );
}

export default FeedbackForm;
