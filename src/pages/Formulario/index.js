import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate  } from "react-router-dom";
import axios from "axios";

const Formulario = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const navigate = useNavigate()

  const crearProducto = (evento) => {
    evento.preventDefault();
    axios.post("http://localhost:5005/api/producto", {
      title,
      description,
      img,
      cantidad,
      precio,
    })
    .then(respuesta => {
        navigate(`/detalles/${respuesta.data._id}`)
    })
    .catch(err => console.log(err))
        
  };

  return (
    <form onSubmit={crearProducto}>
      <Input
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Url de la foto"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <Input
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <Input
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <Button
        type="submit"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
      >
        Registrar
      </Button>
    </form>
  );
};

export default Formulario;
