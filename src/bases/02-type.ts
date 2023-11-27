export const pokemonIds = [1,20,30,34,66];


interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const pokemon:Pokemon = {
    id: 1,
    name: 'Bulbaser'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}



export const pokemons: Pokemon[] = [];

pokemons.push(  charmander, pokemon )

console.log(pokemons);


