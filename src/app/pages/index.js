// pages/index.js
import React, { useEffect, useState } from "react";
import Table from "../components/Table";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const result = await response.json();
      const formattedData = result.results.map((pokemon) => ({
        name: pokemon.name,
        options: [pokemon.name, `${pokemon.name}-alt1`, `${pokemon.name}-alt2`],
      }));
      setData(formattedData);
    };

    fetchData();
  }, []);

  return <Table data={data} />;
};

export default Home;
