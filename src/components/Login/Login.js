import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncStorage from '@react-native-async-storage/async-storage';

const availableUsers = [
  { email: "admin", password: "admin" },
  { email: "user1", password: "password1" },
];

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Usuário ou senha em branco, verifique.");
      return;
    }
    const matchedUser = availableUsers.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      try {
        await AsyncStorage.setItem('logged', 'true');
        navigate("/home");
      } catch (error) {
        console.error('Erro fazer validacao de login:', error);
      }
    } else {
      alert("Usuário ou senha incorretos.");
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
