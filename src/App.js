import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const alturaNum = parseFloat(altura.replace(",", "."));
  const pesoNum = parseFloat(peso.replace(",", "."));

  let imc = 0;
  let classificacao = "";

  if (alturaNum > 0 && pesoNum > 0) {
    imc = pesoNum / (alturaNum * alturaNum);

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Calculadora de IMC</h1>
        <p className="descricao">
          Digite sua altura e seu peso para calcular seu IMC
        </p>

        <div className="form">
          <div className="campo">
            <label htmlFor="altura">Altura (m)</label>
            <input
              id="altura"
              type="text"
              placeholder="Ex: 1.80"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="peso">Peso (kg)</label>
            <input
              id="peso"
              type="text"
              placeholder="Ex: 80"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
        </div>

        {imc > 0 && (
          <div className="resultado">
            <h2>Resultado</h2>
            <p>
              <strong>IMC:</strong> {imc.toFixed(2)}
            </p>
            <p>
              <strong>Classificação:</strong> {classificacao}
            </p>
          </div>
        )}

        <div className="tabela">
          <h2>Tabela de classificação</h2>
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menor que 18.5</td>
                <td>Abaixo do peso</td>
              </tr>
              <tr>
                <td>18.5 a 24.9</td>
                <td>Peso normal</td>
              </tr>
              <tr>
                <td>25 a 29.9</td>
                <td>Sobrepeso</td>
              </tr>
              <tr>
                <td>30 a 34.9</td>
                <td>Obesidade grau 1</td>
              </tr>
              <tr>
                <td>35 a 39.9</td>
                <td>Obesidade grau 2</td>
              </tr>
              <tr>
                <td>40 ou mais</td>
                <td>Obesidade grau 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;