const activo = true;

// let mensaje = '';

// if ( activo ){
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

// const mensajeSoloActivo = ( activo ) ? 'Activo' : null;
const mensajeSoloActivo = activo && 'Activo';

console.log(mensaje);