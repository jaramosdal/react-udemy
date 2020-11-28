// Sin Async
// const getImagenPromesa = () => new Promise(resolve => resolve('https://hsrthsth.com'));
// getImagenPromesa().then(console.log);

// Con Async
const getImagen = async () => {

    try{
        const apiKey = 'ZMcqKiNzZPbLndh4vzjWFBKvFlR84Psu';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }

}

getImagen();

// El único contra de usar Async, es que para controlar los errores tenemos que usar el try/catch.