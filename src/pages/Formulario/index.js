import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";



import axios from "axios";

const Formulario = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [precio, setPrecio] = useState("");

  const navigate = useNavigate();

  const crearLibro = (evento) => {
    evento.preventDefault();
    axios
      .post("http://localhost:5005/api/libro", {
        title,
        description,
        img,
        precio,
      })
      .then((respuesta) => {
        navigate(`/libros/${respuesta.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
       <h1>Agrega tu nuevo libro</h1>
      <form  onSubmit={crearLibro} >
        <Input
        width={300}
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
          placeholder="Precio aprox"
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
    </div>
  );
};

export default Formulario;
