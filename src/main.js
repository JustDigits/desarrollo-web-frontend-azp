const alumnos = ['Monse', 'Mau', 'Gustavo', 'Jose', 'Barbara', 'Juan'];

// const [nom1, nom2, nom3, , , nom6] = alumnos;
// console.log(nom1, nom2, nom3, nom6);

const [nom1, nom2, nom3, ...nombres] = alumnos;
console.log(nom1, nom2, nom3, ...nombres);
