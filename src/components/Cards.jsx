import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ item, deleteCard }) => {
  return (
    <>
      <Card style={{ width: "18rem", float: "left", margin: "20px" }}>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            <h4>{item.name}</h4>
            <p>{item.lastName}</p>
          </Card.Title>
          <Card.Text>{item.class}</Card.Text>

          <Button variant={"success"} onClick={() => deleteCard(item.name)}>
            Button
          </Button>
          <Link to={`view-user/${item.id}`}>
            <Button>View More</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
