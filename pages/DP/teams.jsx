import React from "react";

const linkedin = "https://cdn-icons-png.flaticon.com/256/1384/1384014.png"
const inimage = "https://cdn-icons-png.flaticon.com/256/4401/4401407.png"
const fbimage = "https://cdn-icons-png.flaticon.com/256/1384/1384005.png"

const Teamfn = ({ imageSrc, Name, designation }) => (
  <div class="card2">
    <div class="background"></div>
    <div class="logo">
      <img src={imageSrc} className="w-48 h-48 rounded-full" />
      <h3 className="text-lg font-serif flex text-center">{Name}</h3>
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
        "https://res.cloudinary.com/dvhuttonp/image/upload/v1706081919/Team/in37tukhrw16zqzt3w1n.jpg",
      Designatation: "Production Head",
    },
    {
      imageSrc:
      "https://res.cloudinary.com/dvhuttonp/image/upload/v1706081918/Team/purkwq8owcreswtzyyia.jpg",
      Name: "Amar Kumar",
      Designatation: "Operation Head",
    },

    {
      imageSrc:
        "https://res.cloudinary.com/dvhuttonp/image/upload/v1706081919/Team/fmrnuuavkbrlvkdg9wnl.jpg",
      Name: "Navin Kumar",
      Designatation: "Director of Photography",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dvhuttonp/image/upload/v1706081918/Team/zybbsaxxbyxkurewor9a.jpg",
        Name: "Kishan Tiwary",
      Designatation: "Admin Head",
    },

    {
      imageSrc:
        "https://res.cloudinary.com/dvhuttonp/image/upload/v1706081918/Team/ckja54pqmo6az0pntm7a.jpg",
      Name: "Neeraj Dubey",
      Designatation: "Editing Head",
    },
  ];

  return (
    <>

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
