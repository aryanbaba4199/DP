import React from "react";
import Link from "next/link";

const social = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">
              <img
                src="https://dreamplanner.in/dp.png"
              />
            </div>
            <div className="details">
              <div className="name">Dream Planner</div>
              <div className="username">@dreamplanner___</div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="text">
        <Link className="icon" href="https://www.instagram.com/dreamplanner___/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin flex justify-center items-center">
              <img
                className="w-8 h-8"
                src="https://cdn-icons-png.flaticon.com/256/2111/2111463.png"
              />
            </span>
          </div>
          <div className="text">Instagram</div>
        </Link>
      </div>
    </div>
  );
};

export default social;
