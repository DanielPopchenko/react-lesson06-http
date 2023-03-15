import React from "react";
import errorImage from "../error.png";

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width={140} style={{ margin: "20px 0px" }} alt="" />
      {message}
    </div>
  );
}
