import React, { useState } from "react";

const Header = () => {
  // Creo es Estado [darkMode] y el cambio [setDarkMode(Es decir que es la funcion que hara cambiar este estado)]
  // false sera el estado inicial de mi useState
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  // Funcion que va acambiar el estado
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="Header">
        <h1>React Hooks</h1>
        <button type="button" onClick={handleClick}>
          {/* Con este if validamos si el estado es true o false y dependiendo del resultado muestra un texto u otro */}
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </>
  );
};

export default Header;
