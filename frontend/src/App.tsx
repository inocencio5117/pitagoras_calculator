import { useState } from "react";
import pythagorasImg from "./assets/pythagorasTheorem.png";
import "./App.css";

function App() {
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
              <input type="text" name="hip" placeholder="?" />
            </div>

            <hr />

            <div className="form-child">
              <label htmlFor="sideA">Valor do Cateto a:</label>
              <input type="text" name="sideA" placeholder="3" />
            </div>

            <hr />

            <div className="form-child">
              <label htmlFor="sideB">Valor do Cateto b:</label>
              <input type="text" name="sideB" placeholder="4" />
            </div>
          </div>

          <hr />

          <div className="buttons-container">
            <button>Calcular</button>
            <button>Limpar campos</button>
          </div>

          {/* <div>resolução do problema</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
