// // Отримати дані з API і вивести їх на сторінку
// // https://pokeapi.co/api/v2/pokemon
// // 1. Вивести список покемонів (20шт) на сторінку
// // 2. Створити розмітку картки покемона
// // 3. При клікові по картці покемона - відкривати модалку з даними по покемону на якого ми клікнули
const listPokemons = document.querySelector('.pokemon-list');

getPokemons().then(renderPokemons);

async function getPokemons() {
  const pokemonsData = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(res => res.results);
  //   console.log(pokemonsData);
  const pokemons = [];
  for (const pokemon of pokemonsData) {
    const data = await fetch(pokemon.url).then(res => res.json());
    pokemons.push(data);
  }
  return pokemons;
}

function renderPokemons(pokemons) {
  console.log(pokemons);
  const pokemonsHtml = pokemons
    .map(
      pokemon => `<li class="pokemon-card" data-pokemon=${pokemon.name}>
    <h2>${pokemon.name}</h2>
    <img width ='200' height = '200' src=${pokemon.sprites.other.dream_world.front_default}  />
  </li>`
    )
    .join('');
  listPokemons.innerHTML = pokemonsHtml;
}
// const data = `<li class="pokemon-card" data-pokemon=${pokemon.name}>
//         <h2>${pokemon.name}</h2>
//         <img src=${pokemon.sprites.other.dream_world.front_default}  />
//       </li>`;
