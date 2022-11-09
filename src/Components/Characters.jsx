import React, { useState, useEffect, useReducer } from "react";

// vamos añadir a cada personaje el boton favorito usando useReducer
// para eso creo el estado inicial como un array vacio
const inicialState = {
  favorites: [],
};

// creo el Reducer que se va a encargar de añadir a favoritos
// el reducer usa la consicional switch
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  // En este caso mi estado inicial sera un arreglo vacio
  const [characters, setcharacters] = useState([]);

  //   incorporando a useReducer creando un estado con el mismo
  // por eso recibe como parametro a  favoriteReducer, inicialState
  const [favorites, dispatch] = useReducer(favoriteReducer, inicialState);

  // Aqui usaremos el useEffect para hacer el llamado a una API
  // en el fetch
  // el response lo convertimos en un objeto .json para poderlo manipular
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      // aqui pasamos la información data a setcharacters y en data.results es donde esta la informacion que necesitamos
      .then((data) => setcharacters(data.results));
  }, []);

  // creo la función que hará uso del Reducer
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <>
      <div className="characters">
        {/* aqui mostramos nuestro favorito seleccionados */}
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}

        {/* mapeamos el Estado para retornar un nuevo arreglo con las instrucciones que le pasemos
        aqui vamos a pasar de personajes a personaje */}
        {characters.map((character) => (
          <div className="item" key={character.id}>
            <h2>{character.name}</h2>
            <button type="button" onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
