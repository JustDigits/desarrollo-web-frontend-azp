const obtenerInfo = (name = 'Alex', apellido = 'Rodríguez') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Alejandro', 'Martínez');

console.log(info);
console.log(sum(20, 10));
