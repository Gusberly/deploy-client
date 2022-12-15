import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={Styles.Landing}>
      <Link to="/home">
        <button className={Styles.btn}>Comenzar</button>
      </Link>
    </div>
  );
}
