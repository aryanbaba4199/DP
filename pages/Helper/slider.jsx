import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const blankStar = "https://cdn-icons-png.flaticon.com/256/16/16666.png";
const filledStar =
  "https://cdn-icons-png.flaticon.com/256/1828/1828884.png";

function FeedbackForm() {
  const { data: session } = useSession();
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  // Getting commenter details
  let name = "Guest";
  let email = "guest";
  if (session) {
    name = session.user.name;
    email = session.user.email;
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
    <div className="bg-slate-700 text-white p-4 md:p-8 max-w-screen-md mx-auto rounded-3xl">
      <p className="text-xl text-white md:text-2xl font-bold mb-8">Please rate your experience</p>
      <div className="card4 p-4 md:p-8 shadow-md flex flex-col md:flex-row justify-between">
        <div className="star-container flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <>
            
            <img
              key={index}
              className="delete-logo cursor-pointer rounded-full "
              src={index < rating ? filledStar : blankStar}
              alt={`Star ${index + 1}`}
              onClick={() => handleStarClick(index + 1)}
            />
            
            </>
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
