import React from 'react';
import PropTypes from 'prop-types';

// import React, { Fragment } from 'react';

// Hay dos tipos de componentes:
// Basados en clases
// Basados en funciones (estos son los que React fomenta hoy en día)

// Functional Components
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo default'
};

export default PrimeraApp;