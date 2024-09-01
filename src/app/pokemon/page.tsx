import React from 'react'

export interface resPokemons{
    name: string;
    url: string;
}

export default async function page() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const json = await res.json();
    const pokemons: resPokemons[] = json.results;
  return (
    <div>page</div>
  )
}