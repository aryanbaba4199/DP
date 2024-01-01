import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const blankStar = "https://cdn-icons-png.flaticon.com/256/16/16666.png";
const filledStar =
  "https://cdn-icons-png.flaticon.com/256/1828/1828884.png";

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
        setfdbkIndex(
          (prevIndex) => (prevIndex - 1 + dbFeedback.length) % dbFeedback.length
        );
      }
    }, 3000);

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
    <div className="flex justify-center items-center w-[95%] ml-2">
      
        <div className="bg2">
          {dbFeedback.length > 0 && (
            <div className=" shadow-lg shadow-black p-2 px-2 md:px-48 py-16 rounded-3xl mt-8">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent font-serif">What our client says</h2>
              <span className="">
                <h3 className="font-semibold bg-gradient-to-r text-center from-black to-red-600 bg-clip-text text-transparent text-2xl mt-8 font-serif">{dbFeedback[fdbkindex].name}</h3>
              </span>

              <p className="mt-2 text-lg text-blue-800 text-center">
                {dbFeedback[fdbkindex].feedback !== ""
                  ? dbFeedback[fdbkindex].feedback
                  : "Awesome services"}
              </p>
              <div className="flex mt-4 w-8 gap-4 ">
                {renderStars(dbFeedback[fdbkindex].rating)}
              </div>
            </div>
          )}
        </div>
        <div className="blob"></div>
      
    </div>
  );
}
