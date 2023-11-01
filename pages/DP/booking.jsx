import React, { useState, useEffect } from "react";
import Header from "../Home/header";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Bottom from "../Helper/bottom";

const WeddingBooking = () => {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFunctionType, setSelectedFunctionType] = useState("");
  const [services, setServices] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [msg, setmsg] = useState("");


  // ----------sign in warnings --------------------
  
  //-------setting name ----------------
  useEffect(() => {
    if (session) {
      setName(session.user.name);
    }
  }, [session]);

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

        const apiKey = "97b4515e61ee4bf4bf8822d16b2cc839"; // used https://opencagedata.com/
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

  //_________________Handling Booking Information _____________
  const handleBook = async () => {
    if (session){
    toast("Booking In process...");

    setBookingConfirmed(true);
    let time = new Date().toISOString().split("T")[0];
    let email = "";
    let status = "Processing...";
    let payment = "No Transaction Found";
    if (session) {
      email = session.user.email;
    }
    
    const bookingData = {
      name,
      email,
      address,
      mobile,
      selectedServices: services,
      msg,
      selectedFunctionType,
      time,
      status,
      payment,
    };
    
    window.location.href = "orderstatus";

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
      } else {
        setBookingConfirmed(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  else{
    toast.error(
      <>
      <p>Sign in mandatory for Booking...</p>
    
      <button className="bio btn-support" onClick={() => signIn()}>Sign in</button>
      
      </>
    );
  }
  };

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className="whole-booking">
        <div className="userdetail">
          <h2 className="title">Fill Details</h2>
        </div>
        <div className="">
          <div className="input-div">
            <div className="input-container">
              <input
                placeholder="Enter Your Name"
                className="input-field"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label for="input-field" className=" input-label">
                Enter Your Name
              </label>

              <span className="input-highlight"></span>
            </div>

            <div className="input-container">
              <input
                placeholder="Location"
                onClick={handleInputClick}
                className="input-field"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
              <label for="input-field" className="input-label">
                Location
              </label>

              <span className="input-highlight"></span>
            </div>

            <div className="input-container">
              <input
                placeholder="Mobile No."
                className="input-field"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></input>
              <label for="input-field" className="input-label">
                Mobile No.
              </label>

              <span className="input-highlight"></span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="title">Select Your Function</h3>
          <div className="services-div">
            {functionType.map((fn, index) => (
              <div className="radio-input" key={index}>
                <label className="checktext">
                  <input
                    type="radio"
                    className="input"
                    value={fn.fntype}
                    onChange={handleFunctionTypeChange}
                    checked={selectedFunctionType === fn.fntype}
                  />
                  {fn.fntype}
                  <span className="span"></span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bookingcontainer card">
          <h3 className="title">Mark Your Need</h3>
          <div className="bookservices">
            {availableServices.map((service, index) => (
              <div className="servic" key={index}>
                <label className="container">
                  <input
                    type="checkbox"
                    className="checktext"
                    value={service.serviceName}
                    onChange={handleServiceChange}
                    checked={services.includes(service.serviceName)}
                  />
                  <div className="checkmark"></div>
                  <text className="checktext">{service.serviceName}</text>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="homeblank"></div>

        <div className="input-container">
          <input
            placeholder="Explain your Function and Budget"
            type="text"
            value={msg}
            className="input-field"
            onChange={(e) => setmsg(e.target.value)}
          />
          <label for="input-field" className="input-label">
            Explain your Function and Budget
          </label>

          <span className="input-highlight"></span>
        </div>

        <div className="bookbtn">
          <h2 onClick={handleBook} className="bio btn-support">
            Book
          </h2>
        </div>
        <div className="line"></div>
        <div className="pg-bottom-holder">
          <div>
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
          <div>
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
          <div>
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
                  <Link href="/status/bookingstatus">
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
        <Bottom/>

        <ToastContainer />
      </div>
    </>
  );
};

export default WeddingBooking;
