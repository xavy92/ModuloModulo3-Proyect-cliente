import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={"/"}  className="nav__projectName">
        {CONSTS.CAPITALIZED_APP} Nuestro Mundo De Libros
      </Link>

      <div className="nav__authLinks">
        {/**Este es el menu que se muestra cuando un usuario inicio sesion */}
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              {props.user.username}
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
            {/* <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button> */}
          </>
        ) : (
          <>
            <Link to={"/auth/signup"} className="authLink">
              Registrarse
            </Link>
            <Link to={"/auth/login"} className="authLink">
              Ingresar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
