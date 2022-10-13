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
      .post(`${process.env.REACT_APP_SERVER_URL}/api/libro`, {
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
        <br></br>
        <br></br>
       <h1>AGREGA TU NUEVO LIBRO A RECOMENDAR</h1>
       <br></br>
       <br></br>
       
      <form  onSubmit={crearLibro} >
        <Input
        
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <br></br>
        <Input
          placeholder="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br></br>
        <br></br>
        <Input
          placeholder="Url de la foto"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <br></br>
        <br></br>
        <Input
          placeholder="Precio aprox"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <br></br>
        <br></br>
        <br></br>
        <Button
          type="submit"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Registrar
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default Formulario;
