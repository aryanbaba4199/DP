import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const blankStar = "https://cdn-icons-png.flaticon.com/256/12626/12626474.png";
const filledStar = "https://free.clipartof.com/490-Free-Clipart-Of-A-Geometric-Star-Colorful.png";

export default function feedbackdata() {
  const [dbFeedback, setdbFeedback] = useState([]);
  const [fdbkindex, setfdbkIndex] = useState(0);

  //-----------Displaying Feedback ----------------------
  useEffect(() => {
    async function fetchRatings() {
      try {
        const res = await axios.get("/api/feedbackHandler");
        if (res.status === 200) {
          const fbData = await res.data;
          setdbFeedback(fbData);
        }
      } catch (error) {
        console.error("Error fetching ratings:", error.message);
      }
    }

    fetchRatings();
  }, []);

  //-----------Showing Feedback --------------------
  useEffect(() => {
    const interval = setInterval(() => {
      if (dbFeedback.length > 0) {
        setfdbkIndex((prevIndex) => (prevIndex - 1 + dbFeedback.length) % dbFeedback.length);
      }
    }, 2000);
  
    return () => {
      clearInterval(interval);
    };
  }, [dbFeedback]);
  

  // ------------Setting stars for feedback --------------------
  const renderStars = () => {
    let rating = dbFeedback[fdbkindex].rating;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <img key={i} src={filledStar} alt={rating} className="delete-logo" />
        );
      } else {
        stars.push(
          <img key={i} src={blankStar} alt={rating} className="delete-logo" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="feedback-card">
        <div className="card4">
            <div className="bg2">
      {dbFeedback.length > 0 && (
        <div className="feedback-container">
            
          <span className=""><h3 className="title">{dbFeedback[fdbkindex].name}</h3></span>
          
          <p className="fstext">
            {dbFeedback[fdbkindex].feedback !== ""
              ? dbFeedback[fdbkindex].feedback
              : "Awesome services"}
          </p>
          <div className="star-container">
            {renderStars(dbFeedback[fdbkindex].rating)}
          </div>
        </div>
        
    
      )}
      </div>
      <div className="blob"></div>
      </div>
    </div>
  );
}
