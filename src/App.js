import React, { Component } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = { pokemonName: '' };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
    console.log(pokemonName);
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, padding: 20, margin: '0 auto' }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />

        <PokemonInfo pokemonName={this.state.pokemonName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
