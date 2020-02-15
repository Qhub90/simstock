import React from "react";
import { Card, Button } from "react-bootstrap";

import "./UserHomePage.css";

const UserHomePage = () => {
  return (
    <div className='main-page'>
      <Card className="card">
        <Card.Img />
        <Card.Body>
          <Card.Title>Welcome -Quentin-</Card.Title>
          <Card.Text>Your account balance is -$55000-</Card.Text>
          <Button variant="primary">Start a transaction</Button>
        </Card.Body>
      </Card>  
      <Card className="card">
        <Card.Img />
        <Card.Body>
          <Card.Title>Your Marketplace Snapshot</Card.Title>
          <Card.Text>DOW </Card.Text>
          <Card.Text>NASDAQ </Card.Text>
          <Card.Text>QQQ</Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>  
    </div>
  );
};

export default UserHomePage;
