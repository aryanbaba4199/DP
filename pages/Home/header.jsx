"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

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

  return (
    <>
      <div className="headerblank"></div>

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
          <Link href="/DP/booking" className="bio btn-support">
            <text> Booking </text>
          </Link>

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
          <Link href="/DP/aboutus" className="bio btn-support">
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
    </>
  );
}

export default Tabmenu;
