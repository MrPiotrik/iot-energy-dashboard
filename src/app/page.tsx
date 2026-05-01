'use client';

import { useState } from "react";
import { Container, Row, Col, Navbar, Alert } from "react-bootstrap";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Smart Meter",
      price: "$120",
      image: "/images/meter.png",
    },
    {
      id: 2,
      name: "Solar Panel",
      price: "$350",
      image: "/images/solar.jfif",
    },
    {
      id: 3,
      name: "Battery Storage",
      price: "$540",
      image: "/images/battery.jfif",
    },
    {
      id: 4,
      name: "EV Charger",
      price: "$290",
      image: "/images/charger.jfif",
    },
  ];

  const selectedItem = items.find(
    (item) => item.id === selectedId
  );

  const addItem = (id: number) => {
    setSelectedId(id);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Energy Equipment Shop
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Alert variant="info">
          Selected item:{" "}
          <strong>
            {selectedItem
              ? selectedItem.name
              : "nothing selected"}
          </strong>
        </Alert>

        <Row className="g-4">
          {items.map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <ProductCard
                card={item}
                selected={selectedId === item.id}
                onSelect={addItem}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}