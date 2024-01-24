import React from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../Components/social/facebook";
import Instagram from "../../Components/social/instagram";
import LinkedIn from "../../Components/social/linkedin";

export default function Bottom() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:gap-72 p-5 bg-slate-800 w-full h-fit">
        <div className=" text-white flex justify-center items-center md:items-start md:justify-start flex-col">
          <div className="flex justify-center items-center md:items-start md:justify-start">
            <img
              className="mr-2 mb-1"
              src="https://cdn-icons-png.flaticon.com/256/535/535137.png"
              alt="Location"
              width="20"
              height="30"
            />
            <h3 className="font-semibold text-xl font-serif">Address</h3>
          </div>
          <div className="grid p-5 text-white">
            <text className="pgalbumtext">Kankarbagh, Patna, Bihar</text>
            <text className="pgalbumtext">Contact: +917005742790</text>
            <text className="pgalbumtext">
              Email: dreamplanner4199@gmail.com
            </text>
          </div>
        </div>

        <div className=" text-white font-serif text-xl flex justify-center items-center md:items-start md:justify-start flex-col">
          <h2 className="font-semibold">Follow us</h2>
          <div className="flex gap-6 mt-4">
            <Facebook />
            <Instagram />
            <LinkedIn />
          </div>
        </div>

        <div className="partner text-white flex justify-center items-center md:items-start md:justify-start flex-col">
          <h2 className="font-semibold text-xl ">Our Other Services</h2>
          <div className="cp p-5">
            <Link href="https://stylers.in/">
              <Image
                src="/styler-light.png"
                width={100}
                height={20}
                alt="Stylers"
                className="akshat p-1"
              />
            </Link>

            <Link href="https://www.akchhatfilmsproduction.com/">
              <text className="akshat p-2">Akshat Films Production</text>
            </Link>
          </div>
        </div>
      </div>
      <div className="nd:flex flex-col justify-center items-center">
        <p className="text-center px-12 text-gray-500 font-semibold bg-slate-800">
          Copyright 2024, Dream Planner | All Right Reserved
        </p>
        <Link
          href="https://raushan-portfolio-gules.vercel.app/"
          className="text-center px-12  text-gray-500 font-semibold bg-slate-800"
        >
          Developed By Floppy Technology    ............
        </Link>
      </div>
    </>
  );
}
