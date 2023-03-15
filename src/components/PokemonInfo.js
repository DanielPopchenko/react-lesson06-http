import React, { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";

// Имеем доступ к имени покемона
// {this.props.pokemonName}

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  // ! Компонент обновляется когда обновляется пропсы или стэйт
  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    // ! Обязательная проверка, чтобы не зациклить компонент
    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }

            return Promise.reject(
              new Error(`Нет покемона с именем "${nextName}"`)
            );
          })
          .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
          .catch((error) => this.setState({ error, status: "rejected" }));
      }, 2000);
    }
  };

  render() {
    const { pokemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Enter pokemon name!</div>;
    }
    if (status === "pending") {
      return <div>Loading...</div>;
    }
    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
