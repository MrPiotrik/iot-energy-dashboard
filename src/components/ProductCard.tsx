'use client';

import { Card, Button, Badge } from "react-bootstrap";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type Props = {
  card: Product;
  selected: boolean;
  onSelect: (id: number) => void;
};

export default function ProductCard({
  card,
  selected,
  onSelect,
}: Props) {
  return (
    <Card
      className={`h-100 shadow-sm ${
        selected ? "border-success border-3" : ""
      }`}
    >
      <Card.Img
        variant="top"
        src={card.image}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{card.name}</Card.Title>

        <Card.Text>
          <strong>{card.price}</strong>
        </Card.Text>

        {selected && (
          <Badge bg="success" className="mb-3">
            Selected
          </Badge>
        )}

        <Button
          variant="success"
          className="mt-auto"
          onClick={() => onSelect(card.id)}
        >
          SELECT
        </Button>
      </Card.Body>
    </Card>
  );
}