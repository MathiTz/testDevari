import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import api from "../../services/api";
import history from "../../services/history";

export default function RecipeCreate() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  const userId = useSelector(state => state.auth.user);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function getCategories() {
      const result = await api.get("/api/v1/category");

      setCategories(result.data);
    }

    getCategories();
  }, []);

  function handleName(e) {
    e.preventDefault();

    setName(e.target.value);
  }
  function handleCategory(e) {
    e.preventDefault();

    setCategory(e.target.value);
  }
  function handleDescription(e) {
    e.preventDefault();

    setDescription(e.target.value);
  }

  async function handleCreateRecipe(e) {
    e.preventDefault();

    if (!name) alert("Por favor, preencha o nome da receita");

    if (!category) alert("Por favor, selecione uma categoria");

    if (!description) alert("Por favor, descreva a receita");

    const result = await api.post("/api/v1/recipe/", {
      title: name,
      description: description,
      category: category,
      user: userId
    });

    if (result.status === 201) {
      history.push(`/recipes/${userId}`);
    }
  }

  return (
    <div className="individual-recipe">
      <section className="login-title">
        <Link to="/main">
          <FontAwesomeIcon icon={faArrowLeft} />
          Voltar
        </Link>
        <h4>Adicionar Receitas</h4>
      </section>
      <main className="individual-recipe__info--create">
        <div className="individual-recipe__box--create">
          <div className="recipe-create__box">
            <form action="">
              <div>
                <input
                  type="text"
                  onChange={e => handleName(e)}
                  placeholder="Nome da receita"
                  value={name}
                />
              </div>
              <div>
                <select
                  name="category"
                  value={category}
                  onChange={e => handleCategory(e)}
                >
                  <option value="">Escolha a categoria da receita</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Descrição</label>
              </div>
              <textarea
                value={description}
                onChange={e => handleDescription(e)}
                name="description"
                cols="30"
                rows="10"
              ></textarea>
              <div className="recipe-create__button">
                <button onClick={e => handleCreateRecipe(e)}>
                  Criar Receita
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
