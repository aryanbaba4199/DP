import React, { useState, useEffect } from "react";
import Header from "../Home/header";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import Bottom from "../Helper/bottom";
import { auth } from "../../utils/firebaseAuth";

const WeddingBooking = () => {

  const rzrKey = process.env.RZR_TEST_KEY;
  

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFunctionType, setSelectedFunctionType] = useState("");
  const [services, setServices] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [msg, setmsg] = useState("");
  const [budget, setBudget] = useState(50000);
  const [orderId, setOrderId] = useState('');
  const [pid, setPid] = useState('');
  


  const router = useRouter();
  // ----------sign in warnings --------------------

  //-------setting name ----------------
  useEffect(() => {
    if (auth) {
      setName(auth?.currentUser?.displayName);
    }
  }, [auth]);

  const functionType = [
    {
      fntype: "Wedding ( Bride )",
    },
    {
      fntype: "Wedding ( Groom )",
    },
    {
      fntype: "Pre-Wedding",
    },
    {
      fntype: "Post-Wedding",
    },
    {
      fntype: "Engagement Ceremony",
    },
    {
      fntype: "Birthday Celebration",
    },
  ];

  const availableServices = [
    {
      serviceName: "Event Planning",
    },
    {
      serviceName: "PhotoGraphy & VideoGraphy",
    },
    {
      serviceName: "Video Editing",
    },
    {
      serviceName: "Wedding Decorators",
    },
    {
      serviceName: "Wedding Venues",
    },
    {
      serviceName: "DJs",
    },
    {
      serviceName: "Wedding Cars",
    },
    {
      serviceName: "Bridal Makeup Artist",
    },
    {
      serviceName: "Mehndi Artist",
    },
    {
      serviceName: "Invitation Card",
    },
    {
      serviceName: "Choreographer",
    },
    {
      serviceName: "Artist Booking",
    },
    {
      serviceName: "Catering Service",
    },
    {
      serviceName: "Dancers",
    },
    {
      serviceName: "Honeymoon",
    },
    {
      serviceName: "Wedding Clothes",
    },
  ];

  //_______________Getting Location_______________
  const handleInputClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = process.env.NEXT_PUBLIC_MAP_KEY; // used https://opencagedata.com/
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              const location = data.results[0].formatted;
              setAddress(location);
            } else {
              setAddress("Location not found");
            }
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
            setAddress("Location not found");
          });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  //_______________Getting Function type _______________
  const handleFunctionTypeChange = (event) => {
    setSelectedFunctionType(event.target.value);
  };

  // _______________Getting Selected Services______________
  const handleServiceChange = (event) => {
    const serviceName = event.target.value;
    if (event.target.checked) {
      setServices([...services, serviceName]);
    } else {
      setServices(services.filter((service) => service !== serviceName));
    }
  };

  const handlePayment = async () => {
    const res = await initRazorpay();

    if (!res) {
      alert('Razorpay sdk failed')
    }
    const data = await axios.post('/api/createOrder', { amount: (((budget * 10) / 100) * 100) });
    

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_LIVE,
      amount: (((budget * 10) / 100) * 100),
      currency: 'INR',
      name: 'Dream Planner',
      description: 'Booking Fee',
      image: 'https://www.dreamplanner.in/dp.png',
      order_id: orderId,
      handler: function (response) {

        setPid(response.razorpay_payment_id)
        handleBook();
        router.push('/DP/orderstatus');
      },
      prefill: {
        name: 'Aryan Dubey',
        email: 'aryanbaba4199@gmail.com',
        contact: '7005742790',
      },
      notes: {
        address: 'Patna, Bihar, India',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const initRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";


      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  //_________________Handling Booking Information _____________
  const handleBook = async () => {
    if (auth.updateCurrentUser) {
      toast("Booking In process...");

      setBookingConfirmed(true);
      let time = new Date().toISOString().split("T")[0];
      let email = "";
      let status = "Processing...";
      
      if (auth.currentUser) {
        email = auth.currentUser.email;
      }
      
      

      const bookingData =  {
        name,
        email,
        address,
        mobile,
        selectedServices: services,
        msg,
        selectedFunctionType,
        time,
        status,
        pid,
        budget,
      };

      try {
        let messagecode = "createbooking";
        const response = await axios.post(
          "/api/bookingHandler",
          { messagecode, bookingData },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("Success");
          setBookingConfirmed(true);
          router.push("/DP/orderStatus");

        } else {
          setBookingConfirmed(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }


    } else {
      toast.error(
        <>
          <p>Sign in mandatory for Booking...</p>

          <button className="bio btn-support" onClick={() => signIn()}>
            Sign in
          </button>
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <div className="mt-8"></div>
      <div className="container">
        <div className=" flex justify-center items-center font-serif text-4xl font-semibold">
          <h2 className="bg-gradient-to-r from-slate-950 to-red-700 text-transparent bg-clip-text ">
            Fill Details
          </h2>
        </div>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-evenly items-center shadow-lg shadow-black py-12">
            <div className="grid">
              <label >
                Enter Your Name
              </label>
              <input
                placeholder="Enter Your Name"
                className="p-1 border-2 border-black px-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>

              <span className="input-highlight"></span>
            </div>

            <div className="grid">
              <label
                
                className="p-2 font-semibold text-lg"
              >
                Location
              </label>
              <input
                placeholder="Location"
                onClick={handleInputClick}
                className="p-1 border-2 border-black px-2"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>

              <span className="input-highlight"></span>
            </div>

            <div className="grid">
              <label
                
                className="p-2 font-semibold text-lg"
              >
                Mobile No.
              </label>
              <input
                placeholder="Mobile No."
                className="p-1 border-2 border-black px-2"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></input>

              <span className="input-highlight"></span>
            </div>
          </div>
        </div>

        <div className="container shadow-lg shadow-black m-8 p-8 w-[90%] flex flex-col justify-center items-center
        bg-gradient-to-r from-purple-200 via-sky-100 to-blue-200 ">
          <h3 className="bg-gradient-to-r from-slate-950 to-red-700 text-transparent bg-clip-text text-3xl font-semibold font-serif">
            Select Your Function
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 items-center ">
            {functionType.map((fn, index) => (
              <div className="p-2" key={index}>
                <label className="bg-gradient-to-r from-slate-950 to-red-700 text-transparent bg-clip-text text-lg font-semibold font-serif">
                  <input
                    type="radio"
                    className="mr-2 w-5 h-5"
                    value={fn.fntype}
                    onChange={handleFunctionTypeChange}
                    checked={selectedFunctionType === fn.fntype}
                  />
                  {fn.fntype}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="container shadow-lg shadow-black m-8 p-8 w-[90%] flex flex-col justify-center items-center
        bg-gradient-to-r from-purple-200 via-sky-100 to-blue-200">
          <div className="flex justify-center items-center pt-8 ">
            <h3 className="bg-gradient-to-r from-slate-950 to-red-700 text-transparent bg-clip-text text-3xl font-semibold font-serif">
              Mark Your Need
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 items-center ">
            {availableServices.map((service, index) => (
              <div
                className=" mt-4   p-2"
                key={index}
              >
                <label className=" text-xl font-serif pl-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value={service.serviceName}
                    onChange={handleServiceChange}
                    checked={services.includes(service.serviceName)}
                  />
                  <span className="ml-2">{service.serviceName}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center px-4 pt-16 pb-4 ">
          <p className="mx-4 font-serif text-blue-800">Enter Your Budget :</p>
          <input
            className="border-2 border-purple-950 rounded-md px-2 shadow-md shadow-black"
            required
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            
          />
        </div>

        <div className="flex justify-center">
          <label
            
            className="mx-4 font-serif text-blue-800"
          >
            Explain your Function
          </label>
          <input
            placeholder="Tell me something about your function"
            type="text"
            value={msg}
            className="border-2 border-purple-950 rounded-md px-2 shadow-md mb-4 shadow-black focus:w-96"
            onChange={(e) => setmsg(e.target.value)}
          />


          <span className="input-highlight"></span>
        </div>

        <div className="flex justify-center items-center font-semibold font-serif text-xl">
          <h2
            onClick={handlePayment}
            className="bg-black p-1 px-4 rounded-md btn text-white"
          >
            Book
          </h2>
        </div>
        <div className="flex justify-center items-center mt-8 text-2xl font-semibold">
          <h2 className="bg-gradient-to-r from-slate-950 to-red-700 text-transparent bg-clip-text font-semibold font-serif">
            Some Important Terms and Condition
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-8 m-4 px-8 py-8 items-center">
          <div className="">
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <text className="Title">Packages</text>
                </div>
                <div className="backSide">
                  <text className="pgalbumtext">
                    Event Planning starts from______
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                      width="30.5rem"
                      className="rupee"
                    />{" "}
                    2 Lakh
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <text className="Title">TAX</text>
                </div>
                <div className="backSide">
                  <text className="Title">GST Inclusive</text>
                  <text>We included all taxes in packages</text>
                </div>
              </div>
            </div>
          </div>
          <div className="user-data-container">
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <text className="Title">Availablity</text>
                </div>
                <div className="backSide">
                  <text className="Title">PAN India</text>
                  <text>We provide PAN india services</text>
                  <text>Our Planners are available in all States</text>
                  <text>Booking Status will show in cart</text>
                  {/* <Link href="/status/bookingstatus"> */}
                  <Link href="/DP/payment">
                    <button className="bio btn-support">Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <text className="Title">Payemtns</text>
                </div>
                <div className="backSide">
                  <text className="Title">Payment Terms </text>
                  <text className="pgalbumtext">
                    Booking Time : 10% <br />
                    Before Execution : 80% <br />
                    Before Event : 10%
                  </text>
                  <text className="pgalbumtext">
                    providing extra service <br />
                    cost : 5% per hour of Booking Amount
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <Bottom />

        <ToastContainer />
      </div>
    </>
  );
};

export default WeddingBooking;
