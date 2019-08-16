import React from "react";
import Ingredient from "./Ingredient";

function IngredientsList({list}) {
  return (
    <ul className="ingredients">
      list.map((ingredient, i) => (
        <Ingredient key={i}>{...Ingredient}</Ingredient>
      ))
    </ul>
  );
}

export default IngredientsList;