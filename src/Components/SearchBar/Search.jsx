import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../../actions/action";
import Styles from "../SearchBar/Search.module.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    setName("");
    dispatch(buscarPokemon(name));
  };

  return (
    <div className={Styles.buscar}>
      <input
        type="text"
        value={name}
        placeholder=" Busca tu Pokémon"
        onChange={(e) => handleInput(e)}
      />
      <Link to="/home/:id">
        <button type="submit" onClick={(e) => handleButton(e)}>
          <img
            className={Styles.imgSearch}
            src={require("../../Imagenes/buscar.png").default}
            alt="img not found"
          />
        </button>
      </Link>
    </div>
  );
}
