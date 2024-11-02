import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        Toggle {onDarkModeClick ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}

export default Header;