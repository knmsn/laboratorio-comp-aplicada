import React, {useState} from 'react';

export default function Result(){
  const [numberX, setNumberX] = useState(0);
  const [numberY, setNumberY] = useState(0);

  const handleSum = () => {
    alert(Number(numberX) + Number(numberY));
  }

  const handleClear = () => {
    setNumberX(0);
    setNumberY(0);
  }

  return (<>
  <h1>Ola usuario!</h1>
    <p>PARABENS! VOCE ESTA LOGADO!</p>
    <p>Agora voce tem acesso a calculadora mais complexa do mundo!</p>
    <input
        type="number"
        placeholder="Numero X"
        style={{ marginLeft: "10px" }}
        value={numberX}
        onChange={(e) => {
          setNumberX(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Numero Y"
        value={numberY}
        onChange={(e) => {
          setNumberY(e.target.value);
        }}
        style={{ marginLeft: "10px" }}
      />
      <button style={{ marginLeft: "10px" }} onClick={handleSum}>SOMAR</button>
      <button style={{ marginLeft: "10px" }} onClick={handleClear}>Limpar</button>
    <p style={{fontWeight: "bold"}}>Para ter acesso a como o projeto foi feito, <a href="https://youtu.be/r_dQp-XJ548">clique aqui.</a>.</p>
    <p style={{fontWeight: "bold"}}>Para ter acesso ao github, <a href="https://github.com/knmsn/laboratorio-comp-aplicada">clique aqui.</a>.</p>
  </>);
}
