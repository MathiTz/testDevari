import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import RecipeCreate from "../components/RecipeCreate";
import MineRecipe from "../components/MineRecipes";
import Recipes from "../components/Recipes";
import IndividualRecipe from "../components/IndividualRecipe";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Recipes} isPrivate />
      <Route path="/recipe/:id" component={IndividualRecipe} isPrivate />
      <Route path="/recipes/:id" component={MineRecipe} isPrivate />
      <Route path="/create" component={RecipeCreate} isPrivate />
    </Switch>
  );
}
