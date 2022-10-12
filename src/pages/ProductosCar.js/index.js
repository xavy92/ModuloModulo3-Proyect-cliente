import React from "react";
import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardProduct from "../../components/cardProduct.js";

const ProductosCar = () => {
  const [productos, setProductos] = useState([]);

  const getAllProductos = () => {
    axios
      .get("http://localhost:5005/api/producto")
      .then((response) => setProductos(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProductos();
  }, []);

  return (
    <div className="productos">
      <SimpleGrid columns={2}>
        {productos.map((producto) => {
          return <CardProduct key={producto._id} {...producto} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default ProductosCar;
