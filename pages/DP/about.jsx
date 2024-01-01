import React from "react";
import Header from "../Home/header"
import Bottom from "../Helper/bottom"


const CompanyTopic = ({ topic, topicDetail }) => (
  <div className="flex flex-col justify-center items-center p-4">
    <h4 className="font-serif text-2xl bg-gradient-to-r bg-clip-text text-transparent from-slate-950 to-red-600 font-semibold">{topic}</h4>
    <p className="text-lg mt-2 bg-gradient-to-r from-slate-950 to-blue-600 bg-clip-text text-transparent">{topicDetail}</p>
  </div>
);

const topics = [
  {
    topic: "Who We Are:",
    topicDetail:
      "Dream Planner is India's premier wedding planning and event management company, specializing in curating unforgettable moments and seamless celebrations. With a passion for crafting extraordinary experiences, we have earned a stellar reputation as the go-to choice for couples and clients seeking top-tier event planning services.",
  },
  {
    topic: "Our Mission & Vision",
    topicDetail:
    "At Dream Planner, our mission is to craft unforgettable and seamless wedding experiences that transcend dreams into reality. We are dedicated to curating each celebration with meticulous attention to detail, creativity, and a commitment to surpassing our clients' expectations. Through personalized and professional event planning, we aim to transform ordinary moments into extraordinary memories, ensuring that every couple's journey from 'I do' to 'happily ever after' is a joyous and stress-free celebration of love"
  },
  {
    topic: "Why Choose Us",
    topicDetail : "Dream Planner aspires to become one of the top rising wedding planners. We perceive and strive every day to put forth the most alluring and heart-warming creations on your table. We envision to cater our clients the best services. We also seek impeccable growth of our extremely talented team which pours utmost dedication and endeavors for turning a raw layout of emotions into a priceless painting."
  },
  {
    topic: "Our Pan-India Presence:",
    topicDetail:
      "With a presence spanning every corner of the country, Dream Planner is a true Pan-India wedding planning powerhouse. From the bustling cities to serene countryside destinations, we bring the magic of celebrations to life, ensuring that no dream is too big or destination too remote. Our extensive network of trusted partners and vendors allows us to create stunning events in any location you desire.",
  },
  {
    topic: "Our Comprehensive Services:",
    topicDetail:
      "At Dream Planner, we understand that every wedding and event is unique. That's why we offer a wide array of services to cater to your specific needs:",
  },
  {
    topic: "Wedding Planning :",
    topicDetail:
      "Our dedicated team of experts will work closely with you to plan every aspect of your wedding, from venue selection and decor to catering and entertainment. We bring your vision to life while relieving you of the stress of planning.",
  },
  {
    topic: "Event Design & Decor :",
    topicDetail:
      "Our talented designers and decorators transform venues into enchanting spaces that captivate your guests. From floral arrangements to lighting and theme creation, we leave no detail untouched.",
  },
  {
    topic: "Entertainment & Photography :",
    topicDetail:
      "Elevate your event with captivating entertainment options and capture every cherished moment with our skilled photographers and videographers.",
  },
  {
    topic: "Experience :",
    topicDetail:
      "With years of experience, we have successfully orchestrated countless weddings and events, earning the trust of our clients.",
  },
  {
    topic: "Creativity :",
    topicDetail:
      "Our innovative and creative team constantly seeks fresh ideas to make your event stand out.",
  },
  {
    topic: "Professionalism :",
    topicDetail:
      "We are committed to professionalism in every aspect, from planning to execution.",
  },
];

const TopicList = () => {
  return (
    <>
    <Header/>
    <div className="homeblank"></div>
    <div className="container mt-8">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-slate-950 to-red-600 bg-clip-text text-transparent font-serif">Dream Planner</h2>
        <p className="text-xl mt-2 font-semibold font-serif">Your Event Our Responsibility</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        {topics.map((companyinfo, index) => (
          <CompanyTopic
            key={index}
            topic={companyinfo.topic}
            topicDetail={companyinfo.topicDetail}
          />
        ))}
      </div>
    </div>
    <Bottom/>
    </>
  );
};

export default TopicList;