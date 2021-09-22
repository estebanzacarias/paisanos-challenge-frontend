import React from "react";
import iconMenu from "../../../assets/icons/icon.png";
import "./index.css";

const Navbar = ({ inputValue, placeholder, setBusqueda, frases, setData }) => {
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = frases.filter((elemento) => {
      if (
        elemento.character
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.quote
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  };
  return (
    <nav className="navbar navbar-responsive row justify-content-center position-fixed m-0 ">
      <div className="row justify-content-center col-11 col-lg-6 navbar-custom p-0 m-0">
        <a className="navbar-brand col-2 text-right ">
          {" "}
          <img src={iconMenu} width={"50px"} />
        </a>
        <form className="form-inline col-8">
          <input
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            className="form-control mr-sm-2 w-100 input-custom"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
