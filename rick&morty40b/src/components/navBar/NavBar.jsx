import React from "react";
import style from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
<<<<<<< HEAD:src/components/navBar/NavBar.jsx
    <div className="nav">
      
      <Link to={"/home"}>
        <div className="styleA">
          <span>Home</span></div>
      </Link>
      <Link to={"/about"}>
        <div className="styleA">
          <span>About</span></div>
=======
    <div className={style.nav}>
      <button onClick={logout}>LogOut</button>

      {/* <Link to={"/"}>
        <div>LogOut</div>
      </Link> */}

      <Link className={style.link} to={"/home"}>
        <div>Home</div>
      </Link>
      <Link className={style.link} to={"/about"}>
        <div>About</div>
>>>>>>> 46269ef5a51fb849485a8af5cba4633bf49d341e:src/components/NavBar.jsx
      </Link>
      <Link className={style.link} to={"/favorites"}>
        <div>Favorites</div>
      </Link>
      <Link className={style.link} to={"/create"}>
        <div>Create</div>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to={"/"}>
        <div className="styleA"><span>Log Out</span></div>
      </Link>
    </div>
  );
}
