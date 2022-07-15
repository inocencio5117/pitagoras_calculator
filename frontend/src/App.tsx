import React, { useState } from "react";

import axios from "axios";

import { translateSideName } from "./utils/translateSideName";
import "./App.css";

type IRestult = {
  side: string | null;
  value: number;
};

function App() {
  const [hip, setHip] = useState<string>("h");
  const [sideA, setSideA] = useState<string>("a");
  const [sideB, setSideB] = useState<string>("b");
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
          Num triângulo retângulo, sempre que conhecer o compremento de dois
          lados, torna-se fácil descobrir o comprimento do terceiro lado que
          falta. Para isso usa-se o famoso{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b>Teorema de Pitágoras:</b>
          </a>
          <i>
            {" "}
            h <sup>2</sup> = a <sup>2</sup> + b <sup>2</sup>
          </i>
          . Usando uma linguagem menos teórica este teorema afirma que o
          quadrado da hipotenusa é igual à soma do quadrado dos catetos. Para
          ver como funciona basta introduzir nos campos abaixo os valores
          conhecidos.
        </p>
      </div>

      <div className="content-container">
        <div id="triangle-bottomleft">
          <b className="hip">{hip}</b>
          <b className="sideA">{sideA}</b>
          <b className="sideB">{sideB}</b>
        </div>
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
                placeholder="Lado A (a)"
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
                placeholder="Lado B (b)"
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
