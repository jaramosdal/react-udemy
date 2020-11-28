import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // 1. Importar el getHeroeById
//         // 2. Obtener el héroe 2
//         // 3. Mostrar el héroe 2 en la consola
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('héroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if(heroe){
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);
    // .then(heroe => console.log('Heroe', heroe))
    // .catch(err => console.warn(err));