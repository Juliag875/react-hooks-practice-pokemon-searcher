import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    fetch(' http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(pokemons=>setPokemons(pokemons))
  }, [])

  const displayedPokemon = pokemons.filter(
    pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  function addPokemon(newItem){
    setPokemons([...pokemons, newItem])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={displayedPokemon} />
    </Container>
  );
}

export default PokemonPage;
