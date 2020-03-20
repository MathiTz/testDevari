import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MineRecipe() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const result = await api.get(`/api/v1/recipe?user=${id}`);

      setData(result.data);
    }
    getData();
  }, [id]);

  return (
    <div className="recipes">
      <section className="login-title">
        <h4>Minhas Receitas</h4>
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
                    pathname: `/edit/${d.id}`
                  }}
                >
                  Editar
                </Link>
              </section>
            </div>
          ))}
        <div className="recipes-box__div--create">
          <FontAwesomeIcon icon={faPlus} />
          <section className="recipes-info__create">
            <Link
              to={{
                pathname: "/create"
              }}
            >
              Adicionar Receita
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
