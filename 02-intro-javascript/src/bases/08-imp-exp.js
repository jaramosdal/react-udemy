import heroes, { owners } from '../data/heroes'

console.log(owners);

const getHeroreById = (id) => heroes.find( (heroe) => heroe.id === id);

console.log(getHeroreById(2));

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
