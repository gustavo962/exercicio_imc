import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const alturaNum = parseFloat(altura);
  const pesoNum = parseFloat(peso);

  let imc = 0;
  let classificacao = "";

  if (alturaNum > 0 && pesoNum > 0) {
    imc = pesoNum / (alturaNum * alturaNum);

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau 1";
    else if (imc < 40) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Calculadora de IMC</h1>

      <input
        type="number"
        placeholder="Altura (ex: 1.75)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Peso (ex: 70)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <br /><br />

      {imc > 0 && (
        <div>
          <h2>IMC: {imc.toFixed(2)}</h2>
          <p>{classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;