import { carroPorId } from './data/carros';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const test = carroPorId(2);
    const test = carroPorId(10);

    if (test) {
      resolve(test);
    } else {
      reject('Error> No se encontró el carro.');
    }
  }, 3000);
});

promise
  .then((json) => {
    console.log(json);
    console.log('Realizado con éxito.');
  })
  .catch((error) => {
    console.error(error);
  });
