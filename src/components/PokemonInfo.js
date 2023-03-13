import React, { Component } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from './services/pokemon-api';

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

      // ! Меняем статус. 'активируем' загрузку и скрываем покемона перед новым запросом
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        //  ! Меняем статус
        .then((pokemon) => this.setState({ pokemon, status: 'resolved' }))
        //  ! Меняем статус
        .catch((error) => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Enter pokemon name.</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
