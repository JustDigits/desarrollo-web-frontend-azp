const carros = ['Ferrari', 'Nissan', 'Porsche', 'McLaren', 'Mercedes'];
carros.push('Mustang GT500', 'Challenger', 'Camaro');

const motos = ['Italika', 'Chopper', 'Ninja', 'SuperSport'];

const tienda = [...motos, ...carros, 'rin 18'];

console.log(carros);
console.log(tienda);

// const carros2 = carros.concat('Mustang GT500', 'Challenger', 'Camaro');
// const tienda2 = motos.concat(carros2).concat('rin 18');

// console.log(carros2);
// console.log(tienda2);