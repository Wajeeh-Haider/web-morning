import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Button Clicked");
  };
  return (
    <>
      <h1>Home</h1>
      <Button variant="primary" onClick={(e) => handleClick(e)}>
        Primary
      </Button>
    </>
  );
};

export default Home;
