import React, { Component } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    // ! State машина idle, resolved, rejected, pending
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    // ! Обязательно делать проверку
    if (prevName !== nextName) {
      console.log('Pokemon name has updated');

      //      'активируем' загрузку и скрываем покемона перед новым запросом
      this.setState({ status: 'pending' });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((response) => {
          // ! Правильная обработка ошибки 404 с кастомным текстом
          if (response.ok) {
            return response.json();
          }
          //   ! new Error('message') - генерит объект ошибки и 'message' будет записан в свойство message
          return Promise.reject(new Error(`Everything crashed, there is no pokemon with this name: ${nextName}`));
        })
        .then((pokemon) => this.setState({ pokemon, status: 'resolved' }))
        .catch((error) => this.setState({ error, status: 'rejected' }));
    }
  }

  //   idle;
  //   pending;
  //   resolved;
  //   rejected;

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter pokemon name.</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

// return (
//     <div>
//       {error && (
//         <div>
//           <h2>Everything crashed, there is no pokemon with this name: {pokemonName}</h2>
//         </div>
//       )}
//       {loading && <div>Loading...</div>}
//       {!pokemonName && <div>Enter pokemon name.</div>}
//       {pokemon && (
//         <div>
//           <p>{pokemon.name}</p>
//           <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemonImage" width={300} />
//         </div>
//       )}
//     </div>
//   );
