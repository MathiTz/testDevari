import React, { useState } from "react";
import HeaderLogin from "../../components/HeaderLogin";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

export default function Login() {
  // username matheusalves789@gmail.com
  // password p1gccn3n
  const [username, setUsername] = useState("matheusalves789@gmail.com");
  const [password, setPassword] = useState("p1gccn3n");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

    if (result.status === 200) {
      const dataResult = JSON.stringify(result.data);
      setData(dataResult);
      localStorage.setItem("data", dataResult);
      setLoading(false);
      window.location.reload();
      history.push("/main");
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
