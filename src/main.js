import { findCarById } from './data/carros';

findCarById(10)
// findCarById(3)
  .then((json) => {
    console.log(json);
    console.log('Realizado con éxito.');
  })
  .catch((error) => {
    console.error(error);
  });
