const persona = {
    nombre: 'Javi',
    apellido: 'Ramos',
    edad: 30,
    direccion: {
        ciudad: 'Toledo',
        zip: 45001,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// Los objetos JavaScript funcionan por referencia 
const persona2 = persona;
persona2.nombre = 'Peter';

// Mejor forma de hacer un clon
const clonPersona = { ...persona };
clonPersona.nombre = 'Noa';

// console.log( { 
    //     persona:persona
    //  } );
    
    // console.table( { persona } );
console.log( { persona } );
console.log( { persona2 } );
console.log( { clonPersona } );