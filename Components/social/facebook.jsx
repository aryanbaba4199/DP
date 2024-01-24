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
              <div className="username">@dreamplanner</div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="text">
        <Link className="icon" href="https://www.facebook.com/profile.php?id=61555895485851">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin flex justify-center items-center">
              <img
                className="w-8 h-8"
                src="https://cdn-icons-png.flaticon.com/256/2504/2504903.png"
              />
            </span>
          </div>
          <div className="text">Facebook</div>
        </Link>
      </div>
    </div>
  );
};

export default social;
