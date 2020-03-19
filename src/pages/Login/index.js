import React, { useState } from "react";
import HeaderLogin from "../../components/HeaderLogin";

import api from "../../services/api";

import "./style.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function signUp(e) {
    e.preventDefault();

    setLoading(true);

    const result = await api.post("/authentication/", {
      username: username,
      password: password
    });

    if (result.status(200)) {
      localStorage.setItem("data", result.data);
    } else {
      alert("Não foi possivel realizar o login");
    }
  }

  return (
    <>
      <HeaderLogin />
      <main className="container login-page">
        <section className="login-title">Entre na sua conta</section>
        <div className="login-form">
          <div className="login-form__email">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              placeholder="exemplo@exemplo.com"
              value={username}
              onChange={e => handleUsername(e)}
            />
          </div>
          <div className="login-form__password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={e => handlePassword(e)}
            />
          </div>
          <div className="login-form__button">
            <button onClick={e => signUp(e)}>Entrar</button>
          </div>
        </div>
      </main>
    </>
  );
}
