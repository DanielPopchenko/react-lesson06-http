import React from 'react';

import errorImage from '../error.png';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width={70} style={{ marginTop: 15 }} alt="errorimage" />
      <p>{message}</p>
    </div>
  );
}
