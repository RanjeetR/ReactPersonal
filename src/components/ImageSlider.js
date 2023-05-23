import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import imageOne from "../static/img/hari-krishnan-7Tec2ehoaZw-unsplash.jpg";
import imageTwo from "../static/img/mike-meyers--haAxbjiHds-unsplash.jpg";
import imageThree from "../static/img/tobi-zLCR7RsxYGs-unsplash.jpg";

export default function ImageSlider(props) {
   
  var items = [
    {
      name: "Random Name #1",
      description: "Probably you have ever seen!",
      img: imageOne,
    },
    {
      name: "Random Name #2",
      description: "Example of my work!",
      img: imageTwo,
    },
    {
      name: "Random Name #3",
      description: "Example of my work!",
      img: imageThree,
    },
  ];

  return (
    <Carousel autoPlay={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
    const imageStyle = {
        width:'100%',
        maxWidth:'350px',
        maxHeight:'350px'
    }
  return (
    <Paper>
        <br/>
      <p>{props.item.description}</p>
      <img src={props.item.img} style={imageStyle}/>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
