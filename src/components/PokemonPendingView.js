import React from "react";
import pendingImage from "../question.png";
import PokemonDataView from "./PokemonDataView";

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": { front_default: pendingImage },
      },
    },

    stats: [],
  };

  return (
    <div role="alert">
      <p>Loading...</p>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
