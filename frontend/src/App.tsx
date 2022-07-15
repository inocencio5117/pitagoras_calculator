import React, { useState } from "react";

import axios from "axios";

import pythagorasImg from "./assets/pythagorasTheorem.png";
import "./App.css";

function App() {
  const [hip, setHip] = useState("");
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [result, setResult] = useState("");

  function handleInput(
    element: React.ChangeEvent<HTMLInputElement>,
    stateFunction: React.Dispatch<React.SetStateAction<string>>
  ) {
    const value = element.target.value;
    stateFunction(value);
  }

  function handleClearButton() {
    setHip("");
    setSideA("");
    setSideB("");
  }

  async function handleCalculate() {
    const request = await axios(
      `http://127.0.0.1:5000/calculate?side=sideB&hip=5&sideA=3`
    );

    console.log(request.data);
  }

  return (
    <div className="App">
      <h1 className="App-title">Calculadora do Teorema de Pitágoras</h1>
      <div className="App-text">
        <h2>Texto sobre o teorema de pitágoras</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptas
          quos amet minima corrupti neque saepe distinctio porro expedita rem
          esse quo deserunt, non blanditiis. Voluptates unde optio beatae cum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          doloremque officiis, fugiat asperiores, excepturi odio quod
          accusantium deserunt iusto, error culpa. Impedit optio minus molestias
          ab eveniet quasi dolor nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis eos quam obcaecati excepturi ratione dolorum,
          magnam corporis iure soluta provident nostrum libero! Harum sed
          laborum nostrum dolor dolores laboriosam illum.
        </p>
      </div>

      <div className="content-container">
        <img src={pythagorasImg} alt="pythagoras theorem" />
        <div className="form-container">
          {/* <input type="checkbox" name="area-toggle" id="area-toggle" /> */}

          <div className="form-wrapper">
            <div className="form-child">
              <label htmlFor="hip">Valor da Hipotenusa:</label>
              <input
                type="number"
                name="hip"
                placeholder="?"
                value={hip}
                onChange={(el) => handleInput(el, setHip)}
              />
            </div>

            <hr />

            <div className="form-child">
              <label htmlFor="sideA">Valor do Cateto a:</label>
              <input
                type="number"
                name="sideA"
                placeholder="3"
                value={sideA}
                onChange={(el) => handleInput(el, setSideA)}
              />
            </div>

            <hr />

            <div className="form-child">
              <label htmlFor="sideB">Valor do Cateto b:</label>
              <input
                type="number"
                name="sideB"
                placeholder="4"
                value={sideB}
                onChange={(el) => handleInput(el, setSideB)}
              />
            </div>
          </div>

          <hr />

          <div className="buttons-container">
            <button onClick={handleCalculate}>Calcular</button>
            <button onClick={handleClearButton}>Limpar campos</button>
          </div>

          {/* <div>resolução do problema</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
