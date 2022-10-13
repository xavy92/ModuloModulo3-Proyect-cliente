import React from "react";
import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
// import { Link } from "react-router-dom";

import CardLibros from "../../components/cardLibros.js";

const Libros = () => {
  const [libros, setLibros] = useState([]);

  const getAllLibros = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/libro`)
      .then((response) => setLibros(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLibros();
  }, []);

  return (
    <div className="libros">
      <SimpleGrid columns={3}>
        {libros.map((libro) => {
          return <CardLibros key={libro._id} {...libro} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default Libros;
