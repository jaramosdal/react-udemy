// Funciones en JS
// NO USAR
// function saludar(nombre){
//     return `Hola ${nombre}`;
// }

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

// Cuando devolvemos un objeto, JavaScript va a confundir los brazos del JSON con los brazos de función, y dará error.
// Solución: Paréntesis.
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar en función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Probar
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Javi');
console.log(usuarioActivo);
