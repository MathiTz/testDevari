import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeaderIndex() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function getData() {
      const dataResult = localStorage.getItem("data");

      setData([dataResult]);
    }

    getData();
  }, []);

  return (
    <>
      <header className="container header-login">
        <h1>DEV</h1>
        <span>food</span>
        <nav>
          <ul>
            <li>
              <Link to="/main">Receitas</Link>
              <Link to="/main/recipes">Minhas Receitas</Link>
              <Link to="/main/recipes/create">Adicionar Receitas</Link>
            </li>
            <li>
              <div>
                <h1>Nome</h1>
                <img src={image} alt="DevFood User" />
              </div>
              <span></span>
              <Link to="/">Sair</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container blue-div-login"></div>
    </>
  );
}
