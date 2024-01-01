import React, { useState, useEffect } from "react";


import Image from "next/image";
import Insta from "../social/instagram";
import Facebook from "../social/facebook";
import LinkedIn from "../social/linkedin";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";  
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    AOS.init;
  }, []);

  const submitHanler = async () => {
    let bookingData = [name,
      email,
      mobile,
      location,
      query];
    const res = await axios.post("/api/bookingHandler", {
      bookingData: bookingData, messagecode : "createbooking"
    });
    if (res.status === 200) {
      toast("Thank you for Query !");
      toast("One of us will response you soon !");
    } else {
      toast("Something went wrong");
    }
  };

  return (
    <>
      <div className="mt-24"></div>
      <div className="mb-8">
        <div className="w-full justify-center items-center flex text-4xl md:text-6xl mt-8 font-bold text-transparent bg-clip-text
        bg-gradient-to-r from-black via-slate-950 to-purple-700">
        <h2>Get In Touch</h2>
        </div>

        <section className="flex flex-col md:flex-row justify-evenly items-center mt-8">
          <div className="w-96 h-80 shadow-lg shadow-black p-8 flex flex-col justify-center items-center mt-4 hover:shadow-2xl hover:shadow-red-600">
            <IoCallSharp className="text-4xl mt-8" />
            <h2
              className="mt-4 text-3xl font-semibold
              bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent
            "
            >
              Talk to us
            </h2>
            <p className="mt-4 text-lg">
              Talking to you brings us a lot of joy
            </p>
            <p className="mt-4 text-blue-600">+91 7005742790</p>
            <span className="flex gap-2">
              <Link href = "https://wa.me/+917005742790" className="mt-4 text-lg text-lime-600">
                Connect on Whatsapp
              </Link>
              <Link href = "https://wa.me/+917005742790">
              <FaWhatsapp className="mt-5 text-2xl text-lime-600" />
              </Link>
            </span>
          </div>
          <div className=" w-96 h-80 shadow-lg shadow-black p-8 flex flex-col justify-center items-center mt-4 hover:shadow-2xl hover:shadow-red-600">
            <IoShareSocial className="text-4xl mt-8" />
            <h2
              className="mt-4 text-3xl font-semibold
              bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent
            "
            >
              Connect With us
            </h2>
            <p className="mt-4 text-lg">A Joyful Conversation Awaits</p>

            <span className="flex flex-col justify-center items-center gap-2">
              <p className="mt-4 text-lg text-green-600">Social Media</p>
              <div className="flex justify-center items-center gap-8">
              <Insta/>
              <Facebook />
              <LinkedIn/>
              </div>
            </span>
          </div>
          <div className="shadow-lg shadow-black p-8 flex flex-col justify-center items-center mt-4 hover:shadow-2xl hover:shadow-red-600">
            <IoLocationSharp className="text-4xl mt-8" />
            <h2 className="mt-4 text-3xl font-semibold bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent">
              Reach on Office{" "}
            </h2>
            <p className="mt-4 text-lg">
              In seeing you, we will be very happy.
            </p>
            <p className="mt-4 text-blue-700">Patna</p>
            <span className="flex gap-2">
              <text className="mt-4 text-lg text-green-600">
                Get Map Location
              </text>
              <Link href="/">
                <FaLocationArrow className="mt-5 text-2xl text-green-600" />
              </Link>
            </span>
          </div>
        </section>

        <section>
          <div className="flex p-8 gap-8 px-2 md:px-24 justify-center items-center w-full mt-8 ">
            

            <div className="w-full md:w-1/2 container p-4 flex flex-col justify-center items-center   shadow-lg shadow-black hover:shadow-2xl hover:shadow-red-950 hover:border-2 hover:border-red-950">
              <h2 className="text-4xl font-semibold mt-8 bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent">
                Get a Callback
              </h2>
              <div className="mt-4">
                <h2 className="text-lg w-full">Enter Your Name</h2>
                <input
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  className="border-2 p-1 rounded-sm border-black w-60 px-2"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg">Enter Your Email</h2>
                <input
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 rounded-sm border-black w-60 p-2"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg">Enter Your Phone Number</h2>
                <input
                  value={mobile}
                  placeholder="Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                  className="border-2 rounded-sm border-black w-60 p-2"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg">Enter Your Address</h2>
                <input
                  value={location}
                  placeholder="Address"
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-2 rounded-sm border-black w-60 p-2"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg">Enter Your Query</h2>
                <input
                  value={query}
                  placeholder="Enter Your Query"
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-2 rounded-sm border-black w-60 p-2"
                />
              </div>
              <div className="flex justify-center mt-4 mb-4 items-center">
                <button
                  className="btn mt-12 bg-black text-white font-semibold px-4 p-1
                "
                  onClick={submitHanler}
                >
                  Submit
                </button>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default contactus;
