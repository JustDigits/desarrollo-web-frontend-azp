import { carros, carroPorNombre } from './data/carros';

console.log(carros);

console.log('Carro por nombre:');
console.log(carroPorNombre('Gustavoo'));

const carroFilter = carros.filter((i) => i.id !== 1);
console.log(carroFilter);

const carroSome = carros.some((i) => i.client.name === 'Gustavvo');
console.log(carroSome);