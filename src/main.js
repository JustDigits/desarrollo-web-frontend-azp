import { carroPorId } from './data/carros';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Estamos esperando una promesa.');

    const test = carroPorId(2);
    console.log(test);
  }, 3000);
});

// const test = carroPorId(2);
// console.log(test);
