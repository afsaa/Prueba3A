const numeroAlumnos = 14;
let notas = [];

for (let i = 0; i < numeroAlumnos; i++) {
  let nota = Math.floor(Math.random() * 5.0);
  notas[i] = nota;
}

const obtenerNotaPromedio = (notas, alumnos) => {
  let sumaNotas = 0;
  for (let x = 0; x < alumnos; x++) {
    sumaNotas += notas[x];
  }
  return sumaNotas / alumnos;
};

const obtenerNotaMayor = notas => {
  return Math.max(notas);
};

const obtenerNotaMenor = notas => {
  return Math.min(notas);
};

let notasPromedio = obtenerNotaPromedio(notas, numeroAlumnos);

let notaMasAlta = obtenerNotaMayor(notas);

let notaMasBaja = obtenerNotaMenor(notas);

console.log(
  `Promedio del grupo: ${notasPromedio}\n Nota más alta: ${notaMasAlta}\n Nota más baja: ${notaMasBaja}`
);
