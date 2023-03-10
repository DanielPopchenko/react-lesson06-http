import React, { Component } from 'react';
import { BsFillAirplaneEnginesFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // trim() - обрезает пробелы строки справа и слева
    if (this.state.pokemonName.trim() === '') {
      toast.error('Enter pokemon name!');

      return;
    }

    this.props.onSubmit(this.state.pokemonName);

    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="pokemonName" value={this.state.pokemonName} onChange={this.handleNameChange} />
          <button type="submit">
            <BsFillAirplaneEnginesFill style={{ marginRight: 8 }} />
            Find
          </button>
        </form>
      </div>
    );
  }
}
