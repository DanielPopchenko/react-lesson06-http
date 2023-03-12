import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import styled from 'styled-components';
import pendingImage from '../question.png';

import PokemonDataView from './PokemonDataView';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': { front_default: pendingImage },
      },
    },
    stats: [],
  };

  return (
    <div style={{ alignItems: 'center' }}>
      <LoadingContainer>
        <SpinnerCircular size={35} color="black" secondaryColor="white" />
        <p style={{ marginLeft: 20, fontSize: 25 }}>Loading...</p>
      </LoadingContainer>
      <div>
        <PokemonDataView pokemon={pokemon} />
      </div>
    </div>
  );
}
