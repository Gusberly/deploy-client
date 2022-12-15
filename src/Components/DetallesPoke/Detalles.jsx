import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId, limpioDetalle } from "../../actions/action";
import Styles from "./Detalles.module.css";

export const PokeDetalles = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokeDetalles = useSelector((state) => state.pokeDetalle);

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch, id]);

  return (
    <section className={Styles.seccion}>
      {pokeDetalles.length > 0 ? (
        <div className={Styles.detalles}>
          <Link to="/home">
            <button
              className={Styles.btnhome}
              onClick={dispatch(limpioDetalle())}
            >
              Volver
            </button>
          </Link>
          <div className={Styles.detalle}>
            <div className={Styles.nombre}>
              <span>{pokeDetalles[0]?.name.toUpperCase()}</span>
            </div>
            <div className={Styles.stats}>
              {/* <div>
                ID
                {`: ${pokeDetalles[0]?.id}`}
              </div> */}
              <div>
                Vida
                {`: ${pokeDetalles[0]?.life}`}
              </div>
              <div>
                Ataque
                {`: ${pokeDetalles[0]?.attack}`}
              </div>

              <div>
                Defensa
                {`: ${pokeDetalles[0]?.defense}`}
              </div>
              <div>
                Velocidad
                {`: ${pokeDetalles[0]?.speed}`}
              </div>
              <div>
                Altura
                {`: ${pokeDetalles[0]?.height}`}
              </div>
              <div>
                Peso
                {`: ${pokeDetalles[0]?.weight}`}
              </div>
            </div>
            {pokeDetalles[0]?.types &&
              pokeDetalles[0]?.types.map((type) => {
                return (
                  <div key={type} className={Styles.type}>
                    <img
                      alt="Type"
                      src={require(`../Card/Tipos/${type}.png`).default}
                    />
                  </div>
                );
              })}
          </div>
          <div>
            <img
              className={Styles.poke}
              src={pokeDetalles[0]?.img}
              alt="Not found"
            />
          </div>
        </div>
      ) : (
        <img
          src={require("../../Imagenes/loading.gif").default}
          alt="img not found"
          className={Styles.loading}
        ></img>
      )}
    </section>
  );
};
