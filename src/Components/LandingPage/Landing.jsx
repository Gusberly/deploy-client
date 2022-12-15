import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Landing.module.css";
import landing from "../../Imagenes/landing.jpg";

export default function Landing() {
  return (
    <div>
      <img src={landing} alt="landing" />
      <div></div>
      <Link to="/home">
        <button className={Styles.btn}>COMENZAR</button>
      </Link>
    </div>
  );
}
