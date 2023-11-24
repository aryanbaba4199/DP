import React, { useState, useEffect } from "react";
import Link from "next/link";
import Feedback from "../Helper/slider";
import FeedbackData from "../Helper/feedbackdata";
import Bottom from "../Helper/bottom";
import Service from "../Helper/servicehero";
import ImgSlider from "../Helper/sliderimage";

const ImageSlider = () => {
  const fdbkinput = (fdbkinputid) => {
    const targetSection = document.getElementById(fdbkinputid);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      
        <div className="homeblank"></div>

        <div className="wholecontainer">
          <div className="firstc">
            <div className="fs-inside flex flex-col md:flex-row md:justify-between">
              <div className="imgslider-box">
                <ImgSlider />
              </div>
              <div className="fsheading max-w-md md:max-w-xl">
                <p className="fstext text-lg md:text-xl">
                  Dream Planner is India's premier wedding planning and event
                  management company, specializing in curating unforgettable
                  moments and seamless celebrations. With a passion for crafting
                  extraordinary experiences, we have earned a stellar reputation
                  as the go-to choice for couples and clients seeking top-tier
                  event planning services.
                </p>
                <div
                  className="fdbk-container mt-4 cursor-pointer"
                  onClick={() => {
                    fdbkinput("fdbkinputid");
                  }}
                >
                  <FeedbackData />
                </div>
              </div>
            </div>
            <Service />
          </div>
        </div>

        <div className="s1 mt-8 md:mt-12">
          <div className="s1-inside">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mandap Theme</h2>
            <p className="text-white shadow-2xl bg-slate-700 rounded-3xl p-5  text-base md:text-lg">
              Our mandap theme work meticulously crafted by our talented theme
              designers. We specialize in creating enchanting and personalized
              mandap setups that reflect the unique vision and cultural
              preferences of each couple. We can design multiple types of mandap
              and pendle decoration. Our designers can also design themes
              according to your choice.
            </p>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop w-full h-auto"
              src="https://i.pinimg.com/564x/df/6d/02/df6d02e6e21d6bad6afbc922a739f961.jpg"
              alt="Mandap Theme"
            />
          </div>
        </div>

        <div className="s1 mt-8 md:mt-12">
          <div className="s1-inside">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Floral Decoration</h2>
            <p className="text-white shadow-2xl bg-slate-700 rounded-3xl p-5  text-base md:text-lg">
              Our floral decoration services are a testament to the beauty of
              nature woven into the fabric of every wedding. Our expert florists
              and decorators work harmoniously to infuse vibrant colors, fragrant
              blooms, and artistic arrangements into your wedding venue. From
              stunning centerpieces and aisle decor to elaborate bridal bouquets
              and intricate floral backdrops, our floral designs add a touch of
              natural elegance, transforming your wedding into a fragrant and
              visually captivating celebration.
            </p>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop w-full h-auto"
              src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1660804521_image875.jpg"
              alt="Floral Decoration"
            />
          </div>
        </div>

        <div className="s1 mt-8 md:mt-12">
          <div className="s1-inside">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Theme Entry</h2>
            <p className="text-white shadow-2xl bg-slate-700 rounded-3xl p-5  text-base md:text-lg">
              Our theme entry designs are the grand opening statements of your
              wedding celebration. Our creative team crafts awe-inspiring and
              thematic entryways that set the tone for your special day. Whether
              it's a traditional, modern, or destination-inspired theme, our goal
              is to create a captivating first impression that leaves a lasting
              memory. We pay meticulous attention to detail, ensuring that every
              element aligns seamlessly with your chosen theme, making your entry
              a mesmerizing experience for you and your guests.
            </p>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop w-full h-auto"
              src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1694080343_image9150.jpg"
              alt="Theme Entry"
            />
          </div>
        </div>

        <div className="s1 mt-8 md:mt-12">
          <div className="s1-inside">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dance Troupe & DJs</h2>
            <p className="text-white shadow-2xl bg-slate-700 rounded-3xl p-5  text-base md:text-lg">
              Our dance troupe services are a celebration of rhythm and culture.
              Our skilled dancers bring vibrant and energetic performances to your
              event, showcasing a fusion of traditional and contemporary dance
              forms. Whether it's classical Indian, Bollywood, or any other style,
              our talented troupe adds a dynamic and entertaining element to your
              celebration, leaving your guests enthralled and ready to hit the
              dance floor.
            </p>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop w-full h-auto"
              src="https://image.wedmegood.com/resized/800X/uploads/member/628710/1635741337_BY4B5735.JPG"
              alt="Dance Troupe & DJs"
            />
          </div>
        </div>

        <div className="line mt-8 md:mt-12" id="fdbkinputid"></div>
        <Feedback />
        <div className="line mt-8 md:mt-12"></div>
        <Bottom />
      
    </>
  );
};

export default ImageSlider;
