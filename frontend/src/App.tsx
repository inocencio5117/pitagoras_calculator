import React, { useState } from "react";

import axios from "axios";

import { translateSideName } from "./utils/translateSideName";
import pythagorasImg from "./assets/pythagorasTheorem.png";
import "./App.css";

type IRestult = {
  side: string | null;
  value: number;
};

function App() {
  const [hip, setHip] = useState<string>("");
  const [sideA, setSideA] = useState<string>("");
  const [sideB, setSideB] = useState<string>("");
  const [result, setResult] = useState<IRestult>();

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
    const hypotenuse = hip === "" ? 0 : hip;
    const A = sideA === "" ? 0 : sideA;
    const B = sideB === "" ? 0 : sideB;

    const side =
      A === 0 ? "sideA" : B === 0 ? "sideB" : hypotenuse === 0 ? "hip" : null;

    const request = await axios(
      `http://127.0.0.1:5000/calculate?side=${side}&hip=${hypotenuse}&sideA=${A}&sideB=${B}`
    );

    setResult({ side, value: request.data.result });
    console.log(request.data);
    console.log(result);
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
          <div className="form-wrapper">
            <div className="form-child">
              <label htmlFor="hip">Valor da Hipotenusa:</label>
              <input
                type="number"
                name="hip"
                placeholder="Hipotenusa (h)"
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
                placeholder="Lado A (3)"
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
                placeholder="Lado B (4)"
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
        </div>
      </div>

      {result?.value ? (
        <span className="result">
          <b>Resultado:</b> O valor d{result?.side === "hip" ? "a" : "o"}{" "}
          <b>{translateSideName(result?.side) ?? ""}</b> é{" "}
          <b>{result?.value}</b>
        </span>
      ) : null}
    </div>
  );
}

export default App;
