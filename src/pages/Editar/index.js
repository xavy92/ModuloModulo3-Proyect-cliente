import React from "react";
import { useState, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
 



const Editar = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [precio, setPrecio] = useState("");

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:5005/api/libro/${id}`)
    .then((response) => {
        const oneLibro = response.data
        setTitle(oneLibro.title)
        setDescription(oneLibro.description)
        setImg(oneLibro.img)
        setPrecio(oneLibro.precio)
    })
    .catch((error) => console.log(error))

  }, [id])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const requestBody = {title, description, img, precio}

    axios.put(`http://localhost:5005/api/libro/${id}`, requestBody)
    .then((response) => {
        navigate(`/libros/${id}`)
    })
  }

  const deleteLibro = () => {
    axios.delete(`http://localhost:5005/api/libro/${id}`)
    .then(() => {
        console.log("elimidado")

        navigate("/libros")
    })
    .catch((err) => console.log(err))
  }



  return (
    <div>
               <h1>Agrega tu nuevo producto</h1>
      <form  onSubmit={handleFormSubmit} >
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
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <Button
          type="submit"
        //   rightIcon={}
          colorScheme="teal"
          variant="outline"
        >
          Editar
        </Button>
        <Button
          
        //   rightIcon={}
          colorScheme="teal"
          variant="outline"
          onClick={deleteLibro}
        >
          Borrar
        </Button>
      </form>
    </div>
  )
}

export default Editar