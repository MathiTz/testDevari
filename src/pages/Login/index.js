import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { signInRequest } from "../../store/modules/auth/actions";

import "./style.css";

export default function Login() {
  // username matheusalves789@gmail.com
  // password p1gccn3n
  const [email, setEmail] = useState("matheusalves789@gmail.com");
  const [password, setPassword] = useState("p1gccn3n");
  const dispatch = useDispatch();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function signUp(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <main className="container login-page">
        <section className="login-title">Entre na sua conta</section>
        <div className="login-form">
          <div className="login-form__email">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              placeholder="exemplo@exemplo.com"
              value={email}
              onChange={e => handleEmail(e)}
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
