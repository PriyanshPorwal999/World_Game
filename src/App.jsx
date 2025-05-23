// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import World from "./components/World";

function App() {
  const [coins, setCoins] = useState(1000); // 🎯 Player starts with 1000 coins

  const [placedItems, setPlacedItems] = useState([]); // 🎯 Track bought/placed items

  const [theme, setTheme] = useState("light"); // 🎯 Theme state: 'light' or 'dark'

  const [positions, setPositions] = useState({}); // Track x, y, and rotation per item

  const handleBuyItem = (item) => {
    if (coins >= item.price) {
      const id = Date.now(); // Assign unique id
      const newItem = { ...item, x: 0, y: 0, rotation: 0, id };

      setCoins(coins - item.price);
      setPlacedItems((prev) => [...prev, item]); // Add item to placed list
    } else {
      alert("Not enough coins!");
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSave = () => {
    const saveData = {
      coins,
      placedItems,
      positions,
      theme,
    };
    localStorage.setItem("virtual-space-save", JSON.stringify(saveData));
    alert("World saved! ✅");
  };

  const handleLoad = () => {
    const loadedData = localStorage.getItem("virtual-space-save");
    if (loadedData) {
      const { coins, placedItems, positions, theme } = JSON.parse(loadedData);
      setCoins(coins);
      setPlacedItems(placedItems);
      setPositions(positions);
      setTheme(theme);
      alert("World loaded! 🌍");
    } else {
      alert("No saved world found.");
    }
  };

  const removeItem = (id) => {
    const updated = placedItems.filter((item) => item.id !== id);
    setPlacedItems(updated);
    setTimeout(handleSave, 0); // Optional: save after delete
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        coins={coins}
        handleBuyItem={handleBuyItem}
        toggleTheme={toggleTheme}
        theme={theme}
        handleSave={handleSave}
        handleLoad={handleLoad}
      />
      <World
        placedItems={placedItems}
        theme={theme}
        positions={positions}
        setPositions={setPositions}
        removeItem={removeItem}
      />
    </div>
  );

  // return (
  //   <div style={{ display: 'flex', backgroundColor: theme === 'light' ? '#e0e0e0' : '#2c3e50', minHeight: '100vh' }}>
  //     <Sidebar coins={coins} handleBuyItem={handleBuyItem} toggleTheme={toggleTheme} theme={theme} handleSave={handleSave}
  //     handleLoad={handleLoad}/>
  //     <World placedItems={placedItems} theme={theme} positions={positions} setPositions={setPositions} removeItem={removeItem}/>
  //   </div>
  // );

  // return (
  //   <div style={{ display: 'flex' }}>
  //     <Sidebar coins={coins} handleBuyItem={handleBuyItem} />
  //     <World placedItems={placedItems} />
  //   </div>
  // );

  // return (
  //   <div style={{ display: 'flex' }}>

  //     <Sidebar coins={coins} setCoins={setCoins} />

  //     <World />
  //   </div>
  // );
}

// function App() {
//   return (
//     <div>
//       <h1>Virtual Space Game 🌌</h1>
//     </div>
//   );
// }

export default App;
