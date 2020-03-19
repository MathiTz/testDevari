import React, { useState } from "react";
import HeaderLogin from "../../components/HeaderLogin";

import api from "../../services/api";

import "./style.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  async function signUp() {}

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
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="login-form__password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login-form__button">
            <button onClick={signUp()}>Entrar</button>
          </div>
        </div>
      </main>
    </>
  );
}
