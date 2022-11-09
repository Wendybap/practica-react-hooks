import React, { useState, useEffect } from "react";

const Characters = () => {
  // En este caso mi estado inicial sera un arreglo vacio
  const [characters, setcharacters] = useState([]);

  // Aqui usaremos el useEffect para hacer el llamado a una API
  // en el fetch
  // el response lo convertimos en un objeto .json para poderlo manipular
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      // aqui pasamos la información data a setcharacters y en data.results es donde esta la informacion que necesitamos
      .then((data) => setcharacters(data.results));
  }, []);

  return (
    <>
      <div className="characters">
        {/* mapeamos el stado para retornar un nuevo arreglo con las instrucciones que le pasemos
        aqui vamos a pasar de personajes a personaje */}
        {characters.map((character) => (
          <h2>{character.name}</h2>
        ))}
        console.log(results);
      </div>
    </>
  );
};

export default Characters;
