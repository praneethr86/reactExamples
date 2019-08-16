import React from "react";

function Ingredient({name, amount, measurement}) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}

export default Ingredient;