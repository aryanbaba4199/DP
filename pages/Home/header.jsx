"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { auth } from "../../utils/firebaseAuth";
import { ToastContainer, toast } from "react-toastify";
import Mobile from "../../Components/Header/button"

// Social Network handling

function Tabmenu() {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      const { displayName, email, photoURL } = auth.currentUser;
      setname(displayName);
      setemail(email);
      setimage(photoURL);
    }
  }, []);

 

 
  // --------User detail saving Redirecting to booking-----------
  const bookingbtn = async () => {
    let user = [];
    if (auth) {
      user = auth.user;

      let messagecode = "userprofile";
      try {
        const response = await axios.post(
          "api/userHandler",
          { messagecode, user },
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 200) {
          console.log("Welcome");
          window.location.href = "/DP/booking";
        }
        if (!response.ok) {
          console.log("Welcome Back ");
          window.location.href = "/DP/booking";
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log("Welcome Back ");
          window.location.href = "/DP/booking";
        } else {
          console.log("Error:", err.message);
          window.location.href = "/DP/booking";
        }
      }
    } else {
      toast("Log in Recommended!");
      window.location.href = "/DP/booking";
    }
  };

  // ------------Handling Sign Out --------------------
  const signOutHandler = async () => {
    try{
      await auth.signOut();
      window.location.href = "/";
    }catch(err){
      console.log("Error:", err);
    }
  }
  // -------Admin Functionality -------
  let useremail = "";
  if (auth.currentUser) {
    useremail = auth.currentUser.email;
  }
  const allowedEmails = [
    "aryanbaba4199@gmail.com",
    "dreamplanner4199@gmail.com",
    "an.rajdubey@gmail.com",
  ];

  return (
    <>
    <div className="md:hidden">
    <Mobile/>
    </div>
      <div className=" bg-gradient-to-r from-white to-purple-300 md:flex hidden text-white p-4 w-full h-24 ">
        <div className="flex items-center w-[70%] md:w-[30%]">
          <div className="flex">
            <Link href="/">
              <img
                src="/dp.png"
                alt="Logo"
                className="w-12 rounded-full"
                href="/home"
              />
            </Link>
            <div className=" font-serif">
              <div className="ml-5 font-bold flex gap-2 text-2xl md:text-4xl mb-2 bg-gradient-to-r from-slate-950 via-purple-700 to-red-700 bg-clip-text text-transparent">
                <Link className="" href="/">
                  Dream
                </Link>
                <Link className="sitename1 cursor-pointer" href="/">
                  Planner
                </Link>
              </div>
              <div className="">
                <span className="bg-gradient-to-r text-lg font-serif from-purple-800 to-red-700 bg-clip-text text-transparent ">Your Event, Our Responsibility</span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="part2 flex items-center w-[60%] gap-4">
          <Link href="/" className="p-1 bg-red-600 rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
            Home
          </Link>
          <Link href="/DP/service" className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
            Services
          </Link>

          <span onClick={bookingbtn} className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
            Booking
          </span>

          <Link
            href="/DP/orderstatus"
            className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold"
          >
            Orders
          </Link>
          <Link href="/DP/themes" className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
            Gallery
          </Link>
          
          
          <Link href="/DP/about" className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
            About
          </Link>
          
          {auth.currentUser ? (
            <span
              className="p-1 bg-black rounded-lg w-24 hidden md:flex justify-center  btn font-semibold"
              onClick={signOutHandler}
            >
              Log out
            </span>
          ) : (
            <span
              className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold"
              
            >
              <Link href="/Authentication/login">
              Login
              </Link>
            </span>
          )}
          {auth && allowedEmails.includes(email) && (
            <Link href="/Admin/main" className="p-1 bg-black rounded-lg w-20 hidden md:flex justify-center  btn font-semibold">
              Admin
            </Link>
          )}
        </div>
        <div className="user-container w-[10%] flex items-center justify-end p-2">
          <div className="auth1 w-full flex flex-col justify-center items-center">
            {auth.currentUser ? (
              <>
                <img src={image} alt={name} className="w-12 rounded-full" />
                <span className="font-semibold text-blue-950">{name}</span>
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2602/2602046.png"
                  alt="Guest"
                  className="w-12"
                />
                <Link href="/Authentication/login" className="text-black font-serif">Guest</Link>
                
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Tabmenu;
