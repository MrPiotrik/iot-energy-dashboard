"use client";

import React, { useEffect, useState } from "react";

type EnergyData = {
  name: string;
  value: number;
};

const LOCAL_STORAGE_KEY = "ENERGY_DASHBOARD_DATA";

export default function DashboardPage() {
  const [data, setData] = useState<EnergyData[]>([]);

  // завантаження із localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (stored) {
      setData(JSON.parse(stored));
    } else {
      const defaultData: EnergyData[] = [
        { name: "Solar Panels", value: 120 },
        { name: "Battery Storage", value: 80 },
        { name: "Grid Usage", value: 60 },
        { name: "EV Charger", value: 40 },
      ];

      setData(defaultData);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(defaultData)
      );
    }
  }, []);

  // оновлення даних + збереження
  const updateValue = (index: number, amount: number) => {
    const updated = [...data];
    updated[index].value += amount;

    setData(updated);

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updated)
    );
  };

  return (
    <div className="container mt-4">
      <h2>⚡ Energy Dashboard</h2>
      <p>IoT Energy Monitoring System</p>
    <p>Last update: {new Date().toLocaleTimeString()}</p>
      <div className="row">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-3 mt-3"
          >
            <div className="card shadow p-3">
              <h5>{item.name}</h5>
              <h2>{item.value} kWh</h2>

              <div className="mt-3 d-flex gap-2">
                <button
                  className="btn btn-success"
                  onClick={() => updateValue(index, 10)}
                >
                  +10
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => updateValue(index, -10)}
                >
                  -10
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}