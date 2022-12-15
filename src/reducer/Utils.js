export const ordenarPokemon = (orden, array) => {
  switch (orden) {
    case "asc":
      return array.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    case "des":
      return array.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    case "men":
      return array.sort((a, b) => {
        return a.attack - b.attack;
      });
    case "may":
      return array.sort((a, b) => {
        return b.attack - a.attack;
      });
    default:
      return array;
  }
};

export const pokemonPorOrigen = (origen, array) => {
  switch (origen) {
    case "exi":
      return array.filter((poke) => typeof poke.id === "number");
    case "crea":
      return array.filter((poke) => typeof poke.id === "string");
    default:
      return array;
  }
};

export const filtroPorTipo = (tipo, array) => {
  return array.filter((poke) => poke.types.includes(tipo));
};

export const buscarPokemon = (name, array) => {
  if (name) {
    return array.filter(
      (poke) => poke.name.toLowerCase() === name.toLowerCase()
    );
  }
};
