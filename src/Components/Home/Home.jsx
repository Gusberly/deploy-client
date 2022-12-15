import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemon,
  getTypes,
  ordenDePokemon,
  buscarPokemon,
  pokeFilter,
  pokeCreacion,
} from "../../actions/action";
import { Card } from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { Navbar } from "../NavBar/Nav";
import Styles from "./Home.module.css";

export default function Home() {
  const [, setRefreshState] = useState(false);
  const [, setLoading] = useState(false);
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemons);
  const allPoke = useSelector((state) => state.allPokemons);
  const types = useSelector((state) => state.types);
  const [origen, setOrigen] = useState("All");
  const [pagAct, setPagAct] = useState(1);
  const [pokePag] = useState(12);
  const ultimoPoke = pagAct * pokePag;
  const primerPoke = ultimoPoke - pokePag;
  const pokeAct = allPokemon.slice(primerPoke, ultimoPoke);

  const paginado = (numPage) => {
    setPagAct(numPage);
  };

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemon());
  }

  const handleTypes = (e) => {
    dispatch(pokeFilter(e.target.value), origen);
    setPagAct(1);
    setRefreshState((prevState) => !prevState);
  };

  const handleFilter = (e) => {
    setOrigen(e.target.value);
    dispatch(pokeCreacion(e.target.value));
    setPagAct(1);
    setRefreshState((prevState) => !prevState);
  };

  const handleSort = (e) => {
    dispatch(ordenDePokemon(e.target.value));
    setPagAct(1);
    setLoading((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    dispatch(buscarPokemon(e));
    setPagAct(1);
  };

  const pageHandler = (pag) => {
    setPagAct(pag);
  };

  return (
    <div className={Styles.principal}>
      <div className={Styles.nav}>
        <Navbar onSearch={(e) => handleSearch(e)} />
      </div>

      <button
        className={Styles.btnRecarga}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img
          className={Styles.imgRecarga}
          src={require("../../Imagenes/recargar.png").default}
          alt="Img Not Found"
        />
      </button>
      <div>
        <div className={Styles.selectores}>
          <select
            className={Styles.select}
            onChange={(e) => {
              handleSort(e);
            }}
            name="Type"
          >
            <option value="ordenAlf">Orden Alfabetico</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
          <select
            className={Styles.select}
            onChange={(e) => {
              handleSort(e);
            }}
            name="Type"
          >
            <option value="atta">Ordenalos por Fuerza</option>
            <option value="men">Menor</option>
            <option value="may">Mayor</option>
          </select>
          <select
            className={Styles.select2}
            onChange={(e) => {
              handleFilter(e);
            }}
          >
            <option value="orig">Elige el Origen</option>
            <option value="All">Todos</option>
            <option value="exi">Existente</option>
            <option value="crea">Creado</option>
          </select>
          <select
            className={Styles.select3}
            onChange={(e) => {
              handleTypes(e);
            }}
            name="Tipo"
          >
            <option>Tipos de Pokemons</option>

            {types?.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </div>
        <div className={Styles.paginado}>
          <Paginado
            pokePag={pokePag}
            allPokemon={allPokemon.length}
            paginado={paginado}
            onSetPage={pageHandler}
            pagAct={pagAct}
          />
        </div>
        {allPokemon.length > 0 ? (
          <section className={Styles.card}>
            {pokeAct?.map((el) => {
              return (
                <Card name={el.name} types={el.types} img={el.img} id={el.id} />
              );
            })}
          </section>
        ) : !allPoke.length ? (
          <div>
            <img
              className={Styles.recarga}
              src={require("../../Imagenes/loading.gif").default}
              alt="loading"
            />
          </div>
        ) : (
          <img
            className={Styles.recarga}
            src={require("../../Imagenes/noEncontrado.png").default}
            alt="no encontrado"
          />
        )}
      </div>
    </div>
  );
}
