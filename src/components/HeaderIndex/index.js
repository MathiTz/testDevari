import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/modules/auth/actions";

import "../style.css";

export default function HeaderIndex() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.name);
  const image = useSelector(state => state.auth.image);
  const user = useSelector(state => state.auth.user);

  return (
    <>
      <header className="container header-index">
        <div className="header-index__logo">
          <h1>DEV</h1>
          <span>food</span>
        </div>
        <nav className="header-index__nav">
          <ul>
            <li>
              <Link to="/main">Receitas</Link>
              <Link to={`/recipes/${user}`}>Minhas Receitas</Link>
              <Link to="/create">Adicionar Receitas</Link>
            </li>
          </ul>
        </nav>
        <div className="header-index__user-logout">
          <div>
            <h1>{name}</h1>
            <img src={image} alt="DevFood User" />
          </div>
          <span></span>
          <button onClick={() => dispatch(signOut())}> Sair</button>
        </div>
      </header>
      <div className="container blue-div-index"></div>
    </>
  );
}
