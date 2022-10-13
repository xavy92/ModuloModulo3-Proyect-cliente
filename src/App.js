import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
// import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup"
// import Perfil from "./pages/Perfil";
import "bulma/css/bulma.min.css"
import Footer from "./components/Footer";
import Detalles from "./pages/Detalles";
import Formulario from "./pages/Formulario";
import Editar from "./pages/Editar";
import Libros from "./pages/Libros";



export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
      <Route path="/" element={<HomePage />}/>
      <Route path="/auth/login" element={<LogIn authenticate={authenticate} />}/>
      <Route path="/auth/signup" element={<Signup authenticate={authenticate} />} />
      {/* <Route path="/perfil" element={<Perfil />}/> */}
      {/* <Route path="/pedidos" element={<Pedidos />}/> */}
      <Route path="/libros" element={<Libros />}/>
      <Route path="/libros/:id" element={<Detalles />}/>
      <Route path="/nuevoLibro" element={<Formulario />}/>
      <Route path="/libros/edit/:id" element={<Editar />}/>
      

      {/* ruta de mis libros con sus componentes 
      listado de libros, formulario para agregar un nuevo producto, vista a detalle de un libro
      vista para editar el libro.

      */}
      {/* <Route path="/auth/signup" element={<Signup />}/>
      <Route path="/auth/signup" element={<Signup />}/> */}
     
      </Routes>
      <Footer />

    </div>
  );
}
