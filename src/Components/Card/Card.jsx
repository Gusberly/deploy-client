import React from "react";
import Styles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ id, name, types, img }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.name}>
        <h3>{name && name.toUpperCase()}</h3>
      </div>
      <div className={Styles.rest}>
        {types.map((t) => {
          return (
            <div key={t} className={Styles.type}>
              <h3>{t[0].toUpperCase() + t.substring(1)}</h3>
            </div>
          );
        })}
        <Link to={`/pokemon/${id}`}>
          <div className={Styles.img}>
            <img src={img} alt="Pokemon" />
          </div>
        </Link>
      </div>
    </div>
  );
};
