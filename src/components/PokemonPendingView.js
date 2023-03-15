import React from "react";

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

  return <div>PokemonPendingView</div>;
}
