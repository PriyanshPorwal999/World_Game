import { useState } from "react";
import "./World.css";

function World({ placedItems, theme, positions, setPositions, removeItem }) {
  // const [positions, setPositions] = useState({}); // Track x, y, and rotation per item

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e) => {
    const index = e.dataTransfer.getData("text/plain");
    const rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // 🛠 Snap to nearest 50px grid
    const gridSize = 50;
    x = Math.round(x / gridSize) * gridSize;
    y = Math.round(y / gridSize) * gridSize;

    setPositions((prev) => ({
      ...prev,
      [index]: { ...(prev[index] || {}), x, y },
    }));
  };

  const handleRotate = (index) => {
    setPositions((prev) => ({
      ...prev,
      [index]: {
        ...(prev[index] || {}),
        rotation: ((prev[index]?.rotation || 0) + 45) % 360,
      },
    }));
  };

  return (
    <div
      // style={{ flex: 1, backgroundColor: '#d0f0c0', minHeight: '100vh', padding: '1rem', position: 'relative' }}

      // style={{
      //   flex: 1,
      //   backgroundColor: theme === "light" ? "#d0f0c0" : "#1c2833",

      //   backgroundImage: theme === 'light'
      //   ? `
      //     linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
      //     linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
      //     `
      //   : `
      //     linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      //     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
      //     `,

      // backgroundSize: '50px 50px',

      //   minHeight: "100vh",
      //   padding: "1rem",
      //   position: "relative",
      //   color: theme === "light" ? "#000" : "#ecf0f1",
      // }}

      className={`world${theme === "dark" ? " dark" : ""}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>World 🌍</h2>

      {placedItems.length === 0 ? (
        <p className="empty">No items placed yet. Start building!</p>
      ) : (
        // <p>No items placed yet. Start building!</p>
        placedItems.map((item) => {
          const pos = positions[item.id] || {};
          return (
            <div
              key={item.id} // <-- Use item.id here
              className="placed-item"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              onDoubleClick={() => handleRotate(item.id)}
              // Deleting item on right click.
              onContextMenu={(e) => {
                e.preventDefault();
                if (window.confirm("Delete this item?")) {
                  removeItem(item.id); // this part is already correct
                }
              }}
              style={{
                left: pos.x || 0,
                top: pos.y || 0,
                transform: `rotate(${pos.rotation || 0}deg)`,
                position: "absolute",
              }}

              // style={{
              //   width: "100px",
              //   height: "100px",
              //   backgroundColor: theme === "light" ? "#fff" : "#566573",
              //   border: "1px solid #000",
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   position: "absolute",
              //   left: pos.x || 0,
              //   top: pos.y || 0,
              //   transform: `rotate(${pos.rotation || 0}deg)`,
              //   cursor: "grab",
              //   userSelect: "none",
              // }}
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    // width: "60px",
                    // height: "60px",

                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                    // objectFit: "cover", // or "contain" if you want to keep aspect ratio
                    marginBottom: "0.3em",
                  }}
                />
              )}
              {/* <span>{item.name}</span> */}

              {/* {item.name} */}
            </div>
          );
        })

        // placedItems.map((item, index) => {
        //   const pos = positions[index] || {};
        //   return (
        //     <div
        //       key={index}
        //       draggable
        //       onDragStart={(e) => handleDragStart(e, index)}
        //       onDoubleClick={() => handleRotate(index)}
        //       style={{
        //         width: "100px",
        //         height: "100px",

        //         backgroundColor: theme === "light" ? "#fff" : "#566573",

        //         // backgroundColor: '#fff',
        //         border: "1px solid #000",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         position: "absolute",
        //         left: pos.x || 0,
        //         top: pos.y || 0,
        //         transform: `rotate(${pos.rotation || 0}deg)`,
        //         cursor: "grab",
        //         userSelect: "none",
        //       }}
        //     >
        //       {item.name}
        //     </div>
        //   );
        // })
      )}
    </div>
  );
}

// function World({ placedItems }) {
//     return (
//       <div style={{ flex: 1, backgroundColor: '#d0f0c0', minHeight: '100vh', padding: '1rem' }}>
//         <h2>World 🌍</h2>

//         {placedItems.length === 0 ? (
//           <p>No items placed yet. Start building!</p>
//         ) : (
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//             {placedItems.map((item, index) => (
//               <div key={index} style={{ width: '100px', height: '100px', backgroundColor: '#fff', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 {item.name}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

// function World() {
//     return (
//       <div style={{ flex: 1, backgroundColor: '#d0f0c0', minHeight: '100vh', padding: '1rem' }}>
//         <h2>World 🌍</h2>
//         <p>Place your city buildings here!</p>
//       </div>
//     );
//   }

export default World;
