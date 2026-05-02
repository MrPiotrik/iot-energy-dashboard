'use client';

import { useState } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Smart Meter",
      price: 120,
      image: "/images/meter.png",
      added: 0,
    },
    {
      id: 2,
      title: "Solar Panel",
      price: 350,
      image: "/images/solar.jfif",
      added: 0,
    },
    {
      id: 3,
      title: "Battery Storage",
      price: 540,
      image: "/images/battery.jfif",
      added: 0,
    },
    {
      id: 4,
      title: "EV Charger",
      price: 290,
      image: "/images/charger.jfif",
      added: 0,
    },
  ];

  const [cart, setCart] = useState<number[]>([]);

  const addItem = (price: number) => {
    setCart([...cart, price]);
  };

  return (
    <Container className="mt-4">
      <Alert variant="success">
        Total price: <strong>${cart.reduce((a, b) => a + b, 0)}</strong>
      </Alert>

      <Row className="g-4">
        {products.map((item) => (
          <Col key={item.id} xs={12} sm={6} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>

                <Button
                  variant="success"
                  onClick={() => addItem(item.price)}
                >
                  Add to Bin
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}