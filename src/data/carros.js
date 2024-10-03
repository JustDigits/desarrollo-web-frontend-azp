const carros = [
  {
    id: 1,
    marca: 'Seat',
    modelo: 'Fr',
    anio: 2018,
    nombre: 'Leon',
    client: {
      name: 'Gustavoo',
      apellido: 'Rodriguez',
    },
  },
  {
    id: 2,
    marca: 'Seat',
    modelo: 'Excellence',
    anio: 2018,
    nombre: 'Arona',
    client: {
      name: 'Gustavo',
      apellido: 'Rodriguez',
    },
  },
  {
    id: 3,
    marca: 'Cupra',
    modelo: 'Cupra',
    anio: 2018,
    nombre: 'Ateca',
    client: {
      name: 'Gustavo',
      apellido: 'Rodriguez',
    },
  },
  {
    id: 4,
    marca: 'Cupra',
    modelo: 'Cupra',
    anio: 2018,
    nombre: 'Formentor',
    client: {
      name: 'Gustavo',
      apellido: 'Rodriguez',
    },
  },
  {
    id: 5,
    marca: 'Cupra',
    modelo: 'Electrico',
    anio: 2018,
    nombre: 'Moto',
    client: {
      name: 'Gustavo',
      apellido: 'Rodriguez',
    },
  },
];

const carroPorNombre = (nombreCliente) => {
  return carros.find((i) => i.client.name === nombreCliente);
};

const carroPorId = (id) => {
  return carros.find((i) => i.id === id);
};

export { carros, carroPorId, carroPorNombre as default };
