function obtenerInfo(name = 'Alex', apellido = 'Rodríguez') {
  const info = `${name} ${apellido}`;

  return info;
}

const info = obtenerInfo('Alejandro', 'Martínez');

console.log(info);
