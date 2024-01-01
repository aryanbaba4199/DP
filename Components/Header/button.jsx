import React, { useState, useEffect } from "react";
import { auth } from "../../utils/firebaseAuth";
import axios from "axios";
import { IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const button = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
    try {
      await auth.signOut();
      window.location.href = "/";
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <div className="flex justify-between z-10 shadow-lg shadow-black  text-white p-4 w-full">
        <div className="md:hidden block">
          <IconButton className="flex gap-2" onClick={openMenu}>
            <MenuIcon className="text-black font-semibold" />
          </IconButton>
          <Drawer open={open} onClose={handleClose} className="">
            <div className="pt-2 px-4 font-semibold bg-slate-950 h-[100%] flex flex-col gap-4 text-white text-lg">
              <div className="shadow-lg shadow-blue-500 p-2 w-full">
              <h2 className="bg-gradient-to-r from-slate-950 to-red-600 bg-clip-text text-transparent text-xl font-semibold">Dream Planner<br/>
              <p className="ml-8 mt-2"> Menu </p></h2>
              </div>
              <Link
                href="/"
                className="p-1 bg-red-600 rounded-lg  flex justify-center  btn font-semibold"
              >
                Home
              </Link>
              <Link
                href="/DP/service"
                className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
              >
                Services
              </Link>

              <span
                onClick={bookingbtn}
                className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
              >
                Booking
              </span>

              <Link
                href="/DP/orderstatus"
                className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
              >
                Cart
              </Link>
              <Link
                href="/DP/themes"
                className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
              >
                Gallery
              </Link>
              
              
              <Link
                href="/DP/about"
                className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
              >
                About
              </Link>

              {auth.currentUser ? (
                <span
                  className="p-1 bg-red-600 rounded-lg flex justify-center  btn font-semibold"
                  onClick={signOutHandler}
                >
                  Log out
                </span>
              ) : (
                <span className="p-1 bg-red-600 rounded-lg flex justify-center  btn font-semibold">
                  <Link href="/Authentication/login">Login</Link>
                </span>
              )}
              {auth &&
                auth?.currentUser?.email === "aryanbaba4199@gmail.com" && (
                  <Link
                    href="/Admin/main"
                    className="p-1 bg-black rounded-lg flex justify-center  btn font-semibold"
                  >
                    Admin
                  </Link>
                )}
            </div>
          </Drawer>
        </div>
        <div className=" font-serif">
          <div className="ml-5 font-bold flex gap-2 text-2xl md:text-4xl mb-2 bg-gradient-to-r from-slate-950 via-purple-700 to-red-700 bg-clip-text text-transparent">
            <Link className="" href="/">
              Dream
            </Link>
            <Link className="sitename1 cursor-pointer" href="/">
              Planner
            </Link>
          </div>
          <div className=" flex justify-start items-end">
            <span className="bg-gradient-to-r text-base font-serif from-purple-800 to-red-700 bg-clip-text text-transparent ">
              Your Event, Our Responsibility
            </span>
          </div>
        </div>
        <div className="user-container flex items-center justify-end p-2">
          <div className="auth1 w-full flex  flex-col justify-center items-center">
            {auth.currentUser ? (
              <>
                <img src={auth.currentUser.photoURL} alt="Dream" className=" w-8 rounded-full" />
                <span className="font-semibold text-black">{auth?.currentUser?.displayName.split(' ')[0]}</span>
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2602/2602046.png"
                  alt="Guest"
                  className="w-8"
                />
                <span className="text-black font-serif">Guest</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default button;
