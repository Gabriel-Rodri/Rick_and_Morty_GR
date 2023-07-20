import { useEffect, useState } from "react";
import "./App.css";

import Cards from "./components/cards/Cards";
import NavBar from "./components/navBar/NavBar";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/loader/loader";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import ErrorNotFound from "./components/404/ErrorNotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const [title, setTitle] = useState("Bienvenidos");
  const seteandoTitle = (str) => {
    setTitle(str);
  };


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const char = characters.find((ch) => ch.id === Number(id));
          if (char) return alert("Este characters ya existe");
          setCharacters((oldChars) => [...oldChars, data]);

        } else {
          window.alert("¡No hay personajes con este id!");
        }
      }
    );
  }
  
  function onClose(id) {
    dispatch(removeChar(Number(id)));
    dispatch(removeFav(Number(id)));
  }

  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {pathname === "/" ? null : <NavBar onSearch={onSearch} />}

          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/about" exact element={<About />} />
            <Route
              path="/home"
              exact
              element={
                <Cards
                  characters={characters}
                  onClose={onClose}
                  seteandoTitle={seteandoTitle}
                />
              }
            />
            <Route path="/detail/:id" exact element={<Detail />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </>
      )}
    </div>

  );
};
