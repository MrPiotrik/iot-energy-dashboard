import { Card, Button } from "react-bootstrap";

type CardProps = {
  card: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

export default function ShopCard({ card }: CardProps) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={card.image}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{card.title}</Card.Title>

        <Card.Text>
          {card.description}
        </Card.Text>

        <Button
          variant="outline-primary"
          className="mt-auto"
        >
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}