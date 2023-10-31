import React from "react";
import Header from "../Home/header";
const linkedin = "https://cdn-icons-png.flaticon.com/256/1384/1384014.png"
const inimage = "https://cdn-icons-png.flaticon.com/256/4401/4401407.png"
const fbimage = "https://cdn-icons-png.flaticon.com/256/1384/1384005.png"

const Teamfn = ({ imageSrc, Name, designation }) => (
  <div class="card2">
    <div class="background"></div>
    <div class="logo">
      <img src={imageSrc} className="team-img" />
      <h3 className="team-name">{Name}</h3>
      <p style={{fontSize : 15}} className="team-name">{designation}</p>
    </div>

    <a href="#">
      <div class="box box1">
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/1384/1384014.png"
            className="svg"
          />
        </span>
      </div>
    </a>

    <a href="##">
      <div class="box box2">
        {" "}
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/4401/4401407.png"
            className="svg"
          />
          
        </span>
      </div>
    </a>

    <a href="###">
      <div class="box box3">
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/1384/1384005.png"
            className="svg"
          />
        </span>
      </div>
    </a>

    <div class="box box4"></div>
  </div>
);

export default function service() {
  const teammembers = [
    {
      imageSrc:
        "https://i.pinimg.com/564x/87/97/ef/8797eff6d668c8ab55ee60b86a458e73.jpg",
      Name: "Aryan Dubey",
      Designatation: "Co-Founder",
    },
    {
      imageSrc:
        "https://i.pinimg.com/564x/f9/52/aa/f952aa91662d41c24e6a83a69c4b624b.jpg",
      Name: "Bittu Kumar",
      Designatation: "Co-Founder",
    },
    {
      imageSrc:
        "https://scontent.fdbd4-1.fna.fbcdn.net/v/t1.18169-9/13007157_869943669781393_7489435474966132691_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=qmt214N7jnwAX-95-mH&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBRAn7bH-C_azADFHywDfjQE5vlpRZlcI1jbcWeJgIQgQ&oe=6560B3C3",
      Name: "Pawan Dubey",
      Designatation: "Production Head",
    },
    {
      imageSrc:
        "https://scontent.fdbd4-1.fna.fbcdn.net/v/t1.6435-9/94225815_1961220547356169_8084389337505988608_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_ohc=fZWf_9nu7PUAX8zrND6&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfA2Jmzd-J8kpinvJzTxw6C8JgQpIYndkgXPVPC3TctuEg&oe=656093DD",
      Name: "Amar Kumar",
      Designatation: "Operation Head",
    },

    {
      imageSrc:
        "https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/315328055_1406568316836282_5571535970581196225_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e_FWJ2cyqiUAX84MQDd&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfCqbvg2vWx4DQtEWEtD5xwibjWfxGBKRGF7Eyz0NWElRg&oe=653EEAD3",
      Name: "Navin Kumar",
      Designatation: "Director of Photography",
    },
    {
      imageSrc:
        "https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/343065589_2504613376374341_4137584583717607977_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8dc7_0_hNe8AX8GKOAU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBEzIa6jQL7Ia3ch1Y-lcjujrLMIZXQbFRqAhCDRmOhQw&oe=653EC816",
      Name: "Kishan Tiwary",
      Designatation: "Admin Head",
    },

    {
      imageSrc:
        "https://scontent.fdbd4-1.fna.fbcdn.net/v/t1.6435-9/94312918_1093292124373443_3777703609785909248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oQq2o_2yn0IAX_D7y86&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfC--3yUfZ_z35s7aDlAlfsSu9S1Vo8ZDd5nlfw4tbE6Jg&oe=6560A852",
      Name: "Neeraj Dubey",
      Designatation: "Editing Head",
    },
  ];

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className="services-div">
        {teammembers.map((team, index) => (
          <Teamfn
            key={index}
            imageSrc={team.imageSrc}
            Name={team.Name}
            designation={team.Designatation}
          />
        ))}
      </div>
    </>
  );
}
