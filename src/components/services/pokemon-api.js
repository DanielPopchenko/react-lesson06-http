function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    // ! Правильная обработка ошибки 404 с кастомным текстом
    if (response.ok) {
      return response.json();
    }
    //   ! new Error('message') - генерит объект ошибки и 'message' будет записан в свойство message
    return Promise.reject(new Error(`Everything crashed, there is no pokemon with this name: ${name}`));
  });
}

const api = {
  fetchPokemon,
};

export default api;
