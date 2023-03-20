import React, { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "../services/pokemon-api";

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

      pokemonAPI
        .fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  };

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Enter pokemon name!</div>;
    }
    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
