import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      navigate("/home")
    } else {
      alert("DADOS INCORRETOS, TENTE NOVAMENTE");
    }
  };

  return (
    <>
      <h1>Efetue o login</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={{ marginLeft: "10px" }}
      />
      <button style={{ marginLeft: "10px" }} onClick={handleLogin}>ENTRAR</button>
    </>
  );
}
