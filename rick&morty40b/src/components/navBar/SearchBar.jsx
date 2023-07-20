import { useState } from "react";
import style from "../styles/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  
  const handleChange = (event) => {
    
    setId(event.target.value);
  
  };
  const add = () => {
    onSearch(id);
    setId("");
  };
  const randomChar = () => {
    const numRamdom = Math.floor(Math.random() * 825) + 1;
    onSearch(numRamdom);
  };
  return (
<<<<<<< HEAD:src/components/navBar/SearchBar.jsx
    <div className="search">
      <label className="label">search by ID: </label>
=======
    // console.log("id--->", id),
    <div className={style.search}>
      <label>Insert ID: </label>
>>>>>>> 46269ef5a51fb849485a8af5cba4633bf49d341e:src/components/SearchBar.jsx
      <input
        type="search"
        onChange={handleChange}
        value={id}
        name="id"
        placeholder=" Insert ID"
      />
    <button onClick={add} className="styleB"> <span>Add</span></button>
    <button onClick={randomChar}>Random Character</button>
    </div>
  );
}
