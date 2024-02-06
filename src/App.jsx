import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.deno.dev/pokemon?limit=50') 
      .then(response => response.json())
      .then(data => {
        const pokemonDetails = {
          name: data.name,
          imageUrl: data.imageUrl,
          description: data.description,
        };
        setPokemons([pokemonDetails]);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon => {
    const pokemonName = pokemon.name || ''
    return pokemonName.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className="container">
      <SearchBar onChange={handleSearch} />
      <div className="row">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
