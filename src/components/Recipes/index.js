import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./style.css";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await api.get("/api/v1/recipe/");

      setData(result.data);
    }
    getData();
  }, []);
  return (
    <div className="recipes">
      <section className="login-title ">
        <h4>Receitas</h4>
      </section>
      <main className="recipes-box">
        {data &&
          data.map(d => (
            <div key={d.id} className="recipes-box__div">
              <section className="recipes-category">
                <img src={d.category.image} alt="Food" />
                <h3>{d.category.name}</h3>
              </section>
              <section className="recipes-info">
                <h4>{d.title}</h4>
                <p>{d.description}</p>
                <Link
                  to={{
                    pathname: `/recipe/${d.id}`
                  }}
                >
                  Ver Receita
                </Link>
              </section>
            </div>
          ))}
      </main>
    </div>
  );
}
