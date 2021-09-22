import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/layout/navbar";
import Cards from "./components/common/card/";

function App() {
  const [data, setData] = useState([]);
  const [frases, setFrases] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=15")
      .then((response) => {
        setData(response.data);
        setFrases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      <Navbar
        inputValue={busqueda}
        placeholder="Search for character or quote"
        setBusqueda={setBusqueda}
        frases={frases}
        setData={setData}
      />
      <Cards data={data ? data : null} />
    </>
  );
}

export default App;
