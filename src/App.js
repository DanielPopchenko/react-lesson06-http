import React, { Component } from 'react';
import PokemonForm from './components/PokemonForm';

export default class App extends Component {
  handleFormSubmit = (pokemonName) => {
    console.log(pokemonName);
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, padding: 20, margin: '0 auto' }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
