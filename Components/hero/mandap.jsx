"use client";
import React, { useEffect } from "react";
import Mandap from "../../public/madnap1.jpeg";

import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css"
import Link from "next/link";

const mandap = () => {
  useEffect(() =>{
    Aos.init();
  },[]);
 
  return (
    <>
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="font-semibold text-4xl font-serif 
         text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-purple-900 to-red-600"
         data-aos="zoom-in-out"
         data-aos-delay="400"
         data-aos-duration="2000"
        >
          Our Work Overview
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div>
          <Image
            src={Mandap}
            alt="Dream Planner"
            className="mandap"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="2000"
          />
          </div>
          <img
            src="https://weddingplannerskerala.com/wp-content/uploads/photo-gallery/imported_from_media_libray/IMG-20171024-WA0067.jpg?bwg=1640435555"
            alt="Dream Planner"
            className="mandap"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="2000"
          />
        </div>
        <Link href="/DP/themes" className="px-4 rounded-lg p-1 justify-center items-center bg-black text-white font-semibold
        mt-4 text-2xl btn  hover:shadow-lg hover:shadow-black">More</Link>
      </div>
    </div>
    <div>
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <h2
          className="font-semibold text-4xl font-serif 
         text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-purple-900 to-red-600"
         data-aos="zoom-in-out"
         data-aos-delay="400"
         data-aos-duration="2000"
        >
          Our recent completed Events
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div>
            <p
            className="heading text-2xl font-serif shadow-lg shadow-red-600 mt-8 px-8 py-2 text-orange-600 font-semibold"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="2000"
            >{`Gaurav weds Tanisha (Patna, Bihar)`}</p>
            <p
            className="heading text-2xl font-serif shadow-lg shadow-red-600 mt-8 px-8 py-2 text-orange-600 font-semibold"
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="2000"
            >{`Divya Weds Rahul (Muzaffarpur, Bihar)`}</p>
            <p
            className="heading text-2xl font-serif shadow-lg shadow-red-600 mt-8 px-8 py-2 text-orange-600 font-semibold"
            data-aos="fade-right"
            data-aos-delay="2000"
            data-aos-duration="2000"
            >{`Shruti Weds Harsh (Surat, Gujrat)`}</p>
          
          </div>
          
        </div>
        
      </div>
    </div>
    </>
  );
};

export default mandap;
