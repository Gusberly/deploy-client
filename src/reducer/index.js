import {
  pokemonPorOrigen,
  filtroPorTipo,
  ordenarPokemon,
  buscarPokemon,
} from "./Utils";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  pokeApi: [],
  pokeCreado: [],
  pokeDetalle: [],
  limpiarDetalle: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        pokeApi: pokemonPorOrigen("exi", action.payload),
        pokeCreado: pokemonPorOrigen("crea", action.payload),
      };

    case "GET_POKE_ID":
      return {
        ...state,
        pokeDetalle: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };

    case "CREAR_POKEMON":
      return {
        ...state,
      };
    case "POKE_CREADO":
      return {
        ...state,
        pokemons: pokemonPorOrigen(action.payload, state.allPokemons),
      };

    case "FILTRO_POR_TIPO":
      return {
        ...state,
        pokemons: filtroPorTipo(action.payload["tipo"], state.allPokemons),
      };
    case "ORDENAR_POKEMON":
      return {
        ...state,
        allPokemons: ordenarPokemon(action.payload, state.pokemons),
      };

    case "BUSCAR_POKEMON":
      return {
        ...state,
        pokemons: buscarPokemon(action.payload, state.allPokemons),
      };

    case "LIMPIAR_DETALLES":
      let limpiar = state.limpiarDetalle;
      return {
        ...state,
        pokeDetalle: limpiar,
      };

    default:
      return state;
  }
}
