import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const View = () => {
  const [findArray, setFindArray] = useState([]);
  const params = useParams();

  React.useEffect(() => {
    fetch("https://6459f26365bd868e930c47e1.mockapi.io/users", {
      Method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const arr = res.find((item) => item.id == params.id);
        setFindArray(arr);
      });
  }, [params.id]);

  console.log(findArray);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={findArray.image} />
      <Card.Body>
        <Card.Title>
          {findArray.name} {findArray.lastName}
        </Card.Title>
        <Card.Text>{findArray.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default View;
