import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={onDarkModeClick} />
      <ShoppingList 
        items={itemData} 
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange} 
      />
      </div>
  );
}

export default App;
