import { useState } from "react";
import "./App.css";
import image from "./assets/iage.png";

const App = () => {
  const [filterIndex, setFilterIndex] = useState(0);

  const filterOptions = [
    { name: "Original", filter: "none" },
    { name: "Grayscale", filter: "grayscale(1)" },
    { name: "Sepia", filter: "sepia(1)" },
    { name: "Invert", filter: "invert(1)" },
  ];

  const toggleImageColor = () => {
    setFilterIndex((prevIndex) => (prevIndex + 1) % filterOptions.length);
  };

  return (
    <div className="main">
      <div className="border-div">
        <img
          src={image}
          alt=""
          style={{ filter: filterOptions[filterIndex].filter, width: "300px" }}
        />

        <div>
          <i className="patrick">PATRICK WALKER</i>
          <div>
            <i className="sales">SALES MANAGER</i>
          </div>
        </div>
        <div>
          <button className="toggle-button" onClick={toggleImageColor}>
            {filterOptions[filterIndex].name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
