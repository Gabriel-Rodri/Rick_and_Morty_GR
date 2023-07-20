import "./Card.css";

import { Link } from "react-router-dom";

export default function Card({ char, onClose }) {

  const { id, name,  image, status } = char;  //gender, species, origin,
  return (
    <div className="card">
      <div className="close">
        <button onClick={() => onClose(id)}></button>
      </div>
      <div className="info">
          <h2>nombre:  {name}</h2>
          
          {/* <h2>especie:  {species}</h2>
          <h2>genero:  {gender}</h2>
          <h2>origen:  {origin?.name}</h2> */}
          <Link to={`/detail/${id}`}>
          <img src={image} alt={name}/>
        </Link>
          <h2>estado:  {status}</h2>
      </div>
    </div>
  );
}


