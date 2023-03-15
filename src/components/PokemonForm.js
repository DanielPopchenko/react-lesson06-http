import React, { Component } from 'react';

import { AiOutlineGoogle } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
  state = {
    // ! Храним имя когда печатаем
    pokemonName: '',
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Enter pokemon name');

      // ! Выходим из функции
      return;
    }
    // ! Вытягиваем значение формы (имя) из локального стейта и отправляем App
    this.props.onSubmit(this.state.pokemonName);

    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="PokemonName" value={this.state.pokemonName} onChange={this.handleNameChange} />
          <button type="submit">
            <AiOutlineGoogle style={{ marginRight: 8 }} />
            Find
          </button>
        </form>
      </div>
    );
  }
}
