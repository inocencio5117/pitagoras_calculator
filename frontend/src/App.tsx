import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Calculadora do Teorema de Pitágoras</h1>
      <div>
        <h2>Texto sobre o teorema de pitágoras</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptas
          quos amet minima corrupti neque saepe distinctio porro expedita rem
          esse quo deserunt, non blanditiis. Voluptates unde optio beatae cum?
        </p>
      </div>
      <div>
        {/* <img src="" alt="" /> */}
        <input type="checkbox" name="area-toggle" id="area-toggle" />
        <div>
          <span>hip</span>
          <span>ladoA</span>
          <span>ladoB</span>
        </div>
        <button>calcular</button>
        <button>Limpar campos</button>
        <div>resolução do problema</div>
      </div>
    </div>
  );
}

export default App;
