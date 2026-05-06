"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

type Props = {
  card: Product;
  getItem: (item: Product) => void;
  removeItem: (item: Product) => void;
};

export default function ShopCard({
  card,
  getItem,
  removeItem,
}: Props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-3">
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={`/assets/imgs/${card.imgUrl}`}
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

        <Card.Body>
          <Card.Title>{card.title}</Card.Title>

          <Card.Text>
            <strong>{card.price} грн</strong>
          </Card.Text>
        </Card.Body>

        <Card.Footer className="d-flex gap-2">
          <Button
            variant="success"
            onClick={() => getItem(card)}
          >
            Add
          </Button>

          <Button
            variant="danger"
            onClick={() => removeItem(card)}
          >
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}