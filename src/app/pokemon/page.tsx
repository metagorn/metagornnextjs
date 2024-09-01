import React from 'react'

export default async function page() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const json = await res.json();
    console.log(json);
  return (
    <div>page</div>
  )
}