import cloudinary from "cloudinary";

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'ddysjoro6', 
    api_key: '141926966494312', 
    api_secret: 'rj5si424cX5m3hMcRt9LEzAfNmY' 
});

describe('Pruebas en fileUpload', () => {
    test('Debe cargar un archivo y retornar la URL', async () => {
        const response = await fetch('https://cdn5.dibujos.net/dibujos/pintados/202017/flor-sencilla-naturaleza-flores-11762300.jpg');
        const blob = await response.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        
        expect(typeof url).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.png', '');
        await cloudinary.v2.api.delete_resources(imageId, {}, () => {});
    })

    // test('Debe retornar un error', async () => {
    //     const file = new File([], 'foto.png'); 
    //     const url = await fileUpload(file);

    //     expect(url).toBe(null);
    // })
})