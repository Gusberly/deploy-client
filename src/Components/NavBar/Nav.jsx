import React from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/Search";

export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div>
        <img
          className={Styles.head}
          src="../../Imagenes/poke-logooo.png"
          alt="Img not found"
        />
      </div>
      <div className={Styles.crearpoke}>
        <Link to="/post">
          <button>CREA TU POKÉMON</button>
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};
