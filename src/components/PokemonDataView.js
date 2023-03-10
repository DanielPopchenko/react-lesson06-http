import React from 'react';

export default function PokemonDataView({ pokemon: { stats, name, sprites } }) {
  return (
    <div>
      <img src={sprites.other['official-artwork'].front_default} alt="pokemon" width={240} height={100} />
      <h2>{name}</h2>
      <ul>
        {stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
