import React from "react";

import Feedback from "../Helper/slider";
import FeedbackData from "../Helper/feedbackdata";
import Bottom from "../Helper/bottom";
import Service from "../Helper/servicehero";
import { IoCallSharp } from "react-icons/io5";
import Mandap from "../../Components/hero/mandap";
import Linkedin from "../../Components/social/linkedin";
import Insta from "../../Components/social/instagram";
import Facebook from "../../Components/social/facebook";
import Contact from "../../Components/hero/contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { MdCameraRoll } from "react-icons/md";


const Hero = () => {
  useEffect(() =>{
    Aos.init();
  },[]);

  const fdbkinput = (fdbkinputid) => {
    const targetSection = document.getElementById(fdbkinputid);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="p-4 px-8 font-serif flex flex-col mt-12 md:mt-0 md:flex-row justify-evenly">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="font-semibold text-6xl text-center bg-gradient-to-r from-black via-purple-800 to-red-800 bg-clip-text text-transparent"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="2000">
            Dream Planner
          </h1>
          <h2 className="font-semibold text-xl pl-4 pt-4 bg-gradient-to-r from-black via-purple-800 to-red-800 bg-clip-text text-transparent"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="2000">
            Best Wedding Planner in India
          </h2>
          <p className="text-lg text-purple-950 mt-4"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="2000">
            Dream Planner is India's premier Wedding Planner and Event
            Planner, specializing in curating unforgettable moments
            and seamless celebrations. With a passion for crafting extraordinary
            experiences, we have earned a stellar reputation as the go-to choice
            for couples and clients seeking top-tier event planning services.
          </p>
          <span className="mt-16 flex justify-center items-center bg-gradient-to-r from-black via-purple-800 to-red-700 bg-clip-text">
            <IoCallSharp className="mt-2 mr-3 text-2xl text-slate-900"/>
          <p className="text-3xl font-semibold text-transparent">+91-9525751244</p>
          </span>
        </div>
        <div className=""
        data-aos="zoom-in-out"
        data-aos-delay="600"
        data-aos-duration="2000">
          <img
            className="filter contrast-150 w-fit h-fit"
            src="https://img.freepik.com/premium-photo/wedding-smile-couple-hug-white-background-studio-portrait-happy-love-man-beautiful-young-woman-marriage-flowers-bouquet-bride-hand-lean-kiss-husbands-cheerful-face_590464-81054.jpg?w=360"
          />
          <div className="flex -translate-x-0 md:-translate-x-20 -translate-y-12 w-full"
          data-aos="zoom-out-down"
          data-aos-delay="1000"
          data-aos-duration="2000">
            <div className="flex justify-evenly w-full shadow-lg rounded-lg shadow-black p-2">
              <Linkedin />
              <Insta/>
              <Facebook />
              
            </div>
          </div>
        </div>
        
      </div>
      <div 
      data-aos="zoom-out-down"
      data-aos-delay="1000"
      data-aos-duration="1000"
      className="flex flex-col justify-center items-center font-serif text-2xl">
        <div className="flex justify-center items-center gap-8">
        <MdCameraRoll />
        <h2 className="font-semibold text-3xl text-purple-900"> Live streaming </h2>
      
        <MdCameraRoll />
        </div>
        <p className="mt-8">Live wedding Streaming will show here...</p>
        
      </div>
      <div>
        
      </div>
      
      <div className=" font-serif mt-16">
        <h2
          className="text-4xl font-bold flex justify-center items-center mb-8 bg-clip-text text-transparent
        bg-gradient-to-r from-slate-950 via-purple-900 to-red-600"
        data-aos="zoom-in-out"
          data-aos-delay="600"
          data-aos-duration="2000"
        >
          
     
          Our Services
          
        </h2>
        <Service />
      </div>

      <Mandap />

      <div className="container mx-auto">
        <div
          className="mt-8 md:mt-12 border-t border-gray-300"
          id="fdbkinputid"
        ></div>
        <div className = " ">
          <FeedbackData/>
        </div>
        <Feedback />
        <div className="mt-16">
        <Contact/>
        </div>
        
        
        <div className="mt-8 md:mt-12 border-t border-gray-300"></div>
        <Bottom />

      </div>
    </>
  );
};

export default Hero;
