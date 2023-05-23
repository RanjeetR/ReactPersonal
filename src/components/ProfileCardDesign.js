import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../css/profileCard.css";
import { useState } from "react";
import ImageSlider from './ImageSlider'

function ProfileCardDesign() {
  const [contactInfo, setContactInfor] = useState({
    firstName: "Ricky",
    lastName: "Park",
    city: "New York",
    designation: "User interface designer and",
    desginTwo: "front-end developer",
    skills: [
      "UI/UX",
      "Frontend Development",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node",
    ],
  });

  const listItem = contactInfo.skills.map((skill, index) => (
    <li key={index}> {skill} </li>
  ));

  return (
    <>
      <div className="card-container">
        <span className="pro">PRO</span>
        <img
          className="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3>{`${contactInfo.firstName} ${contactInfo.lastName} `}</h3>
        <h6> {contactInfo.city} </h6>
        <p>
          {contactInfo.designation} <br /> {contactInfo.desginTwo}{" "}
        </p>
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button variant="contained" size="medium">
              Save Contact
            </Button>
            <Button variant="contained" size="medium">
              Exchange
            </Button>
          </div>
        </Box>

        <div className="skills">
          <h6>Skills</h6>
          <ul> {listItem}</ul>
        </div>
        <ImageSlider />
      </div>
    </>
  );
}

export default ProfileCardDesign;
