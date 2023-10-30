import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const blankStar = "https://cdn-icons-png.flaticon.com/256/12626/12626474.png";
const filledStar = "https://free.clipartof.com/490-Free-Clipart-Of-A-Geometric-Star-Colorful.png";

function FeedbackForm() {
  const { data: session } = useSession();
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setfeedback] = useState("");

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  //------------Getting commenter details--------
  let name = "Guest";
  let email = "guest";
  if (session) {
    name = session.user.name;
    email = session.user.email;
  }

  //---------Storing Feedback---------
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
    <>
      <div>
        <p className="title">Please rate your experience </p>
        <div className="s1 div-shadow star-container">
          <div className="star-container ">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                className="delete-logo"
                src={index < rating ? filledStar : blankStar}
                alt={`Star ${index + 1}`}
                onClick={() => handleStarClick(index + 1)}
              />
            ))}
          </div>
          <div className="input-container">
            <input
              placeholder="Share Your Experience"
              className="input-field"
              type="text"
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            ></input>
            <label for="input-field" className="input-label follow">
              Share Your Experience
            </label>

            <span className="input-highlight"></span>
            <p className="bio btn-support " onClick={feedbackSubmit}>
              Submit
            </p>
          </div>
        </div>
        <p className="slogan">You rated: {rating} stars</p>
      </div>

      <ToastContainer />
    </>
  );
}

export default FeedbackForm;
