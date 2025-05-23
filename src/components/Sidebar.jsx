import catalog from "../data/catalog";
import "./Sidebar.css";

function Sidebar({
  coins,
  handleBuyItem,
  toggleTheme,
  theme,
  handleSave,
  handleLoad,
}) {
  return (
    <div className={`sidebar${theme === "dark" ? " dark" : ""}`}>
      {/* // <div style={{  */}
      {/* //   width: '250px', 
    //   backgroundColor: theme === 'light' ? '#fff' : '#34495e', 
    //   color: theme === 'light' ? '#000' : '#ecf0f1',
    //   padding: '1rem', 
    //   borderRight: '2px solid #ccc'  */}
      {/* // }}> */}

      <h2>Catalog 🏗️</h2>

      <p className="coins">Coins: {coins} 🪙</p>

      {/* <p>Coins: {coins} 🪙</p> */}

      <div className="item-list">
        {catalog.map((item) => (
          <div key={item.id} className="item">
            <div>
              <h4>{item.name}</h4>
              <p>Price: {item.price} 🪙</p>
            </div>
            <button className="buy-btn" onClick={() => handleBuyItem(item)}>
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* <div>
        {catalog.map((item) => (
          <div key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
            <h4>{item.name}</h4>
            <p>Price: {item.price} 🪙</p>
            <button onClick={() => handleBuyItem(item)}>Buy</button>
          </div>
        ))}
      </div> */}

      <div>
        <button className="save-btn" onClick={handleSave}>
          Save World
        </button>
        <button className="load-btn" onClick={handleLoad}>
          Load World
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={handleSave}>Save World</button>
        <button onClick={handleLoad}>Load World</button>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div> */}

      {/* <div style={{ marginTop: '2rem' }}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div> */}
    </div>
  );
}

// function Sidebar({ coins, handleBuyItem }) {
//     return (
//       <div style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRight: '2px solid #ccc' }}>
//         <h2>Catalog 🏗️</h2>
//         <p>Coins: {coins} 🪙</p>

//         <div>
//           {catalog.map((item) => (
//             <div key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
//               <h4>{item.name}</h4>
//               <p>Price: {item.price} 🪙</p>
//               <button onClick={() => handleBuyItem(item)}>Buy</button>
//             </div>
//           ))}
//         </div>

//         <div style={{ marginTop: '2rem' }}>
//           <button>Save World</button>
//           <button>Load World</button>
//           <button>Switch Theme</button>
//         </div>
//       </div>
//     );

// function Sidebar({ coins, setCoins }) {

//     const handleBuy = (item) => {
//         if (coins >= item.price) {
//           setCoins(coins - item.price);
//           alert(`You bought a ${item.name}!`);
//         } else {
//           alert("Not enough coins!");
//         }
//       };

//       return (
//         <div style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRight: '2px solid #ccc' }}>
//           <h2>Catalog 🏗️</h2>
//           <p>Coins: {coins} 🪙</p>

//           <div>
//             {catalog.map((item) => (
//               <div key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
//                 <h4>{item.name}</h4>
//                 <p>Price: {item.price} 🪙</p>
//                 <button onClick={() => handleBuy(item)}>Buy</button>
//               </div>
//             ))}
//           </div>

//           <div style={{ marginTop: '2rem' }}>
//             <button>Save World</button>
//             <button>Load World</button>
//             <button>Switch Theme</button>
//           </div>
//         </div>
//       );

// return (
//     <div style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRight: '2px solid #ccc' }}>
//       <h2>Catalog 🏗️</h2>
//       <p>Coins: {coins} 🪙</p>

//       <button>Save World</button>
//       <button>Load World</button>
//       <button>Switch Theme</button>
//     </div>
//   );

// return (
//   <div style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRight: '2px solid #ccc' }}>
//     <h2>Catalog 🏗️</h2>
//     <p>Coins: 1000 🪙</p>
//     <button>Save World</button>
//     <button>Load World</button>
//     <button>Switch Theme</button>
//   </div>
// );
// }

export default Sidebar;
