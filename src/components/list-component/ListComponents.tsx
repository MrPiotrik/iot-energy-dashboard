"use client";

import { useEffect, useState } from "react";
import ShopCard from "../shopcard/ShopCard";
import { LOCALSTORE_TOTALITEMS } from "@/models/constants";

type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

export default function ListComponents() {
  const cards: Product[] = [
    {
      id: 1,
      title: "Smart Meter",
      price: 3500,
      imgUrl: "/images/meter.png",
    },
    {
      id: 2,
      title: "Solar Panel",
      price: 12000,
      imgUrl: "/images/solar.jfif",
    },
    {
      id: 3,
      title: "Battery Storage",
      price: 8500,
      imgUrl: "/images/battery.jfif",
    },
    {
      id: 4,
      title: "EV Charger",
      price: 15000,
      imgUrl: "/images/charger.jfif",
    },
  ];

  const [totalItems, setTotalItems] = useState<Product[]>([]);

  useEffect(() => {
    const local = localStorage.getItem(
      LOCALSTORE_TOTALITEMS
    );

    if (local) {
      setTotalItems(JSON.parse(local));
    }
  }, []);

  const addItem = (item: Product) => {
    const updated = [...totalItems, item];

    setTotalItems(updated);

    localStorage.setItem(
      LOCALSTORE_TOTALITEMS,
      JSON.stringify(updated)
    );
  };

  const removeItem = (item: Product) => {
    const index = totalItems.findIndex(
      (x) => x.id === item.id
    );

    if (index === -1) return;

    const updated = [...totalItems];
    updated.splice(index, 1);

    setTotalItems(updated);

    localStorage.setItem(
      LOCALSTORE_TOTALITEMS,
      JSON.stringify(updated)
    );
  };

  const totalPrice = totalItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main>
      <section className="container my-4">
        <h3>Purchased for: {totalPrice} грн</h3>
      </section>

      <section className="container">
        <div className="row">
          {cards.map((item) => (
            <ShopCard
              key={item.id}
              card={item}
              getItem={addItem}
              removeItem={removeItem}
            />
          ))}
        </div>
      </section>
    </main>
  );
}