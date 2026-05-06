"use client";

import { useEffect, useState } from "react";
import { LOCALSTORE_TOTALITEMS } from "@/models/constants";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function BinComponent() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const local = localStorage.getItem(
      LOCALSTORE_TOTALITEMS
    );

    if (local) {
      setItems(JSON.parse(local));
    }
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Selected items list</h2>

      <hr />

      {items.length === 0 ? (
        <h4>No selected items</h4>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-3 p-3 border rounded"
            >
              <strong>{item.title}</strong>
              <div>{item.price} грн</div>
            </div>
          ))}

          <h3 className="mt-4">
            Total: {total} грн
          </h3>
        </>
      )}
    </div>
  );
}