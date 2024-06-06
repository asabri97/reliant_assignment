// src/app/page.js
"use client";

import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const result = await response.json();
      const formattedData = result.results.map((pokemon) => ({
        id: uuidv4(),
        name: pokemon.name,
        options: [pokemon.name, `${pokemon.name}-alt1`, `${pokemon.name}-alt2`],
      }));
      setData(formattedData);
    };

    fetchData();
  }, []);

  const handleSplit = (newRow, index) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index + 1, 0, newRow);
      return updatedData;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="w-full">
        <Table data={data} onSplit={handleSplit} />
      </div>
    </main>
  );
}
