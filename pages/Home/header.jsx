"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

// Social Netwoek handling

function Tabmenu() {
  const [toggle, settoggle] = useState("light");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      const { name, email, image } = session.user;
      setname(name);
      setemail(email);
      setimage(image);
    }
  }, [session]);

  const tooggleTheme = () => {
    if (toggle === "light") {
      settoggle("dark");
    } else {
      settoggle("light");
    }
  };
  useEffect(() => {
    document.body.className = toggle;
  }, [toggle]);

  // --------User detail saving Redirecting to booking-----------
  const bookingbtn = async () => {
    let user = [];
    if (session) {
      user = session.user;

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
      toast("Log in Reccomended!");
      window.location.href = "/DP/booking";
    }
  };

  return (
    <>
      <div className="wholeheader">
        <div className="tab">
          <div className="logo-holder">
            <Link href="/">
              <img src="/dp.png" alt="Logo" className="imglogo" href="/home" />
            </Link>
            <div className="sitenamecontainer">
              <div className="snc">
                <text className="sitename" href="/Home/hero">
                  Dream
                </text>
                <text className="sitename1" href="/Home/hero">
                  Planner
                </text>
              </div>
              <div className="slogan">
                <text className="slogan">Your Event, Our Responsibility</text>
              </div>
            </div>
            <div className="auth-mobile">
              <div className="">
                {session ? (
                  <>
                    <img src={image} className="imglogo" />
                  </>
                ) : (
                  <>
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/2602/2602046.png"
                      className="imglogo"
                    />
                  </>
                )}
              </div>
            </div>

            {/* for mobile devices */}
          </div>
        </div>
        <div className="part2">
          <Link href="/" className="bio btn-support">
            <text> Home </text>
          </Link>
          <Link href="/DP/service" className="bio btn-support">
            <text> Services</text>
          </Link>

          <text onClick={bookingbtn} className="bio btn-support">
            {" "}
            Booking{" "}
          </text>

          <Link href="/DP/orderstatus" className="bio btn-support">
            <text> Cart </text>
          </Link>
          <Link href="/DP/themes" className="bio btn-support">
            <text> Gallery </text>
          </Link>
          <Link href="/DP/teams" className="bio btn-support">
            <text> Team </text>
          </Link>
          <Link href="/DP/career" className="bio btn-support">
            <text> Career </text>
          </Link>
          <Link href="/DP/about" className="bio btn-support">
            <text> About </text>
          </Link>
          <text className="bio btn-support" onClick={() => tooggleTheme()}>
            Dark
          </text>
          {session ? (
            <text className="bio btn-support" onClick={() => signOut()}>
              Log out
            </text>
          ) : (
            <text className="bio btn-support" onClick={() => signIn()}>
              Login
            </text>
          )}
        </div>
        <div className="user-container">
          <div className="auth1">
            {session ? (
              <>
                <img src={image} className="imglogo" />
                <text className="title2">{name}</text>
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2602/2602046.png"
                  className="imglogo"
                />
                <text className="slogan">Guest</text>
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
