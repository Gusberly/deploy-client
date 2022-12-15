import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postPokemon, getTypes } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Create.module.css";

export function PokemonCreado() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [errorName, setErrorName] = useState({ name: " " });
  const [errorLife, setErrorLife] = useState({ life: " " });
  const [errorAttack, setErrorAttack] = useState({ attack: " " });
  const [errorSpeed, setErrorSpeed] = useState({ speed: " " });
  const [errorDefense, setErrorDefense] = useState({ defense: " " });
  const [errorHeight, setErrorHeight] = useState({ height: " " });
  const [errorWeight, setErrorWeight] = useState({ weight: " " });
  const [errorCheck, setErrorCheck] = useState({ types: 0 });
  const [input, setInput] = useState({
    id: "",
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  const validacion = (input, name) => {
    let err = {};
    if (name === "name" && input.length < 2) {
      err.name = "El nombre debe tener mas de 2 caracteres";
    } else if ((name === "life" && parseInt(input) < 0) || input.length === 0) {
      err.life = "El campo ingresado debe ser mayor a Cero";
    } else if (
      (name === "attack" && parseInt(input) < 0) ||
      input.length === 0
    ) {
      err.attack = "El campo ingresado debe ser mayor a Cero";
    } else if (
      (name === "speed" && parseInt(input) < 0) ||
      input.length === 0
    ) {
      err.speed = "El campo ingresado debe ser mayor a Cero";
    } else if (
      (name === "defense" && parseInt(input) < 0) ||
      input.length === 0
    ) {
      err.defense = "El campo ingresado debe ser mayor a Cero";
    } else if (
      (name === "height" && parseInt(input) < 0) ||
      input.length === 0
    ) {
      err.height = "El campo ingresado debe ser mayor a Cero";
    } else if (
      (name === "weight" && parseInt(input) < 0) ||
      input.length === 0
    ) {
      err.weight = "El campo ingresado debe ser mayor a Cero";
    }

    return err;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "name") {
      setErrorName(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "life") {
      setErrorLife(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "speed") {
      setErrorSpeed(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "attack") {
      setErrorAttack(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "defense") {
      setErrorDefense(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "height") {
      setErrorHeight(validacion(e.target.value, e.target.name));
    } else if (e.target.name === "weight") {
      setErrorWeight(validacion(e.target.value, e.target.name));
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      let newState = {
        ...input,
        types: [...input.types, e.target.value],
      };
      setInput(newState);
      setErrorCheck({ types: newState.types.length });
    } else {
      let newState2 = {
        ...input,
        types: [...input.types].filter((el) => el !== e.target.value && el),
      };
      setInput(newState2);
      setErrorCheck({ types: newState2.types.length });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postPokemon(input));
    alert("Pokemon creado correctamente!");
    window.location = "/home";
    setInput({
      id: "",
      name: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [],
    });
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={Styles.todo}>
      <div className={Styles.home}>
        <Link to="/home">
          <img
            className={Styles.homee}
            src={require("../../Imagenes/volver-Home.png").default}
            alt="Home"
          />
        </Link>
      </div>

      <h1>Crea Tu Pokemon</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={Styles.form}>
        <div className={Styles.input}>
          <label>Nombre:</label>
          <input onChange={(e) => handleChange(e)} type="text" name="name" />
          {errorName.name && (
            <span className={Styles.error}>{errorName.name}</span>
          )}
        </div>
        <div>
          <label>Vida:</label>
          <input onChange={(e) => handleChange(e)} type="number" name="life" />
          {errorLife.life && (
            <span className={Styles.error}>{errorLife.life}</span>
          )}
        </div>
        <div>
          <label>Ataque:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="attack"
          />
          {errorAttack.attack && (
            <span className={Styles.error}>{errorAttack.attack}</span>
          )}
        </div>
        <div>
          <label>Defensa:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="defense"
          />
          {errorDefense.defense && (
            <span className={Styles.error}>{errorDefense.defense}</span>
          )}
        </div>
        <div>
          <label>Velocidad:</label>
          <input onChange={(e) => handleChange(e)} type="number" name="speed" />
        </div>
        {errorSpeed.speed && (
          <span className={Styles.error}>{errorSpeed.speed}</span>
        )}
        <div>
          <label>Altura:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="height"
          />
          {errorHeight.height && (
            <span className={Styles.error}>{errorHeight.height}</span>
          )}
        </div>
        <div>
          <label>Peso:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="weight"
          />
          {errorWeight.weight && (
            <span className={Styles.error}>{errorWeight.weight}</span>
          )}
        </div>
        <div>
          <label>Carga tu Imagen:</label>
          <input onChange={(e) => handleChange(e)} type="url" name="img" />
        </div>
        <div>
          {types?.map((t) => (
            <label className={Styles.iconos1}>
              <div>
                <input
                  value={t}
                  className={Styles.check}
                  type="checkbox"
                  name="types"
                  onChange={(e) => handleCheck(e)}
                />
                <img
                  className={Styles.iconos2}
                  src={require(`../Card/Tipos/${t}.png`).default}
                  alt="type"
                />
              </div>
            </label>
          ))}
          <div className={Styles.btn}>
            {!errorName.name &&
            !errorLife.life &&
            !errorSpeed.speed &&
            !errorAttack.attack &&
            !errorDefense.defense &&
            !errorHeight.height &&
            !errorWeight.weight &&
            errorCheck.types > 0 ? (
              <div>
                <button type="submit">Crear</button>
              </div>
            ) : (
              <div>
                <button type="button">Crear</button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
