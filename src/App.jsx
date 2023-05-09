import { useState, useEffect } from "react";

import Navigate from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import View from "./components/View";
import { Route, Routes } from "react-router-dom";

function App() {
  const [item, setItem] = useState([]);

  const deleteCard = (name) => {
    const filterArray = item.filter((item) => {
      return item.name !== name;
    });
    setItem(filterArray);
  };

  useEffect(() => {
    fetch("https://6459f26365bd868e930c47e1.mockapi.io/users", {
      Method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, []);

  console.log(item);

  return (
    <div onClick={() => console.log("App")}>
      <Navigate />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {item?.map((item, key) => {
                return (
                  <Cards
                    item={item}
                    onPlay={() => console.log(item.name + " Play!!!!!")}
                    onPause={() => console.log(item.name + " Pause!!!!!")}
                    setItem={setItem}
                    deleteCard={deleteCard}
                  />
                );
              })}
            </>
          }
        />

        <Route path="view-user/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
