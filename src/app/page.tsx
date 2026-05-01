'use client';

import { Container, Row, Col, Navbar } from "react-bootstrap";
import ShopCard from "@/components/shopcard/ShopCard";

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Smart Meter",
      description: "Advanced smart meter for monitoring electricity consumption in real time.",
      image: "https://picsum.photos/400/250?1",
    },
    {
      id: 2,
      title: "Solar Panel",
      description: "Efficient solar energy generation system for residential buildings.",
      image: "https://picsum.photos/400/250?2",
    },
    {
      id: 3,
      title: "Battery Storage",
      description: "Energy storage system for balancing peak electrical loads.",
      image: "https://picsum.photos/400/250?3",
    },
    {
      id: 4,
      title: "EV Charger",
      description: "Fast charging station for electric vehicles with smart monitoring.",
      image: "https://picsum.photos/400/250?4",
    },
  ];

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Energy Products Catalog
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1 className="mb-4 text-center">
          Shop Cards using Props
        </h1>

        <Row className="g-4">
          {cards.map((card) => (
            <Col
              key={card.id}
              xs={12}
              md={6}
              lg={3}
            >
              <ShopCard card={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}