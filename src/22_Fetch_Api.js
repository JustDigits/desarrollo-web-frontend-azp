const request = fetch('https://jsonplaceholder.typicode.com/users');

// Equivalente a la línea de abajo
/*request.then((response) => {
  console.log(response);

  response.json().then((data) => {
    console.log(data);
  });
}); */

request.then((response) => response.json()).then((data) => console.log(data));

console.log('Prueba de delay');
