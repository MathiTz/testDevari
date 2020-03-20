import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import "../style.css";
import api from "../../services/api";

export default function IndividualRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getRecipe() {
      const result = await api.get(`/api/v1/recipe/${id}`);

      setRecipe(result.data);
      setImage(result.data.category.image);
    }

    getRecipe();
  }, [id]);

  console.log(recipe);

  return (
    <div className="individual-recipe">
      <section className="login-title">
        <Link to="/main">Voltar</Link>
        <h4>{recipe.title}</h4>
      </section>
      <main className="individual-recipe__info">
        <div className="individual-recipe__box">
          <img src={image} alt="Food" />
          <div className="individual-recipe__desc">
            <h3>Descrição</h3>
            <p>{recipe.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
