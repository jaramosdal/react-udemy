const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea:
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo valor del arreglo se llamará setNombre
const establecerArreglo = (valor) => {
    return [ valor, () => { console.log('Hola Mundo'); } ];
};

// Solución:
const [nombre, setNombre] = establecerArreglo('Goku');
console.log(nombre);
setNombre();