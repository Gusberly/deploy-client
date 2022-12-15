import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      <Link to="/home">
        <img
          src={require("../../Imagenes/error404.png").default}
          alt="error404"
        />
      </Link>
    </div>
  );
};
