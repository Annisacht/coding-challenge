import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        console.log(response)
        const results = response.data.results || [];

        const pokemonDetailsPromises = results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          return {
            name: pokemon.name,
            imageUrl: pokemonResponse.data.sprites.front_default,
            description: pokemonResponse.data.description,
            types: pokemonResponse.data.types.map(type => type.type.name),
          };
        });

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonDetails();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon => {
    const pokemonName = pokemon.name || '';
    return pokemonName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <SearchBar onChange={handleSearch} />
        <div className="row">
          {filteredPokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>

      
    </>
  );
}

export default App;
