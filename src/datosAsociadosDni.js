export default (dni) => {
    const datos = {
        nombre: null,
        direccion_recogida: null,
        telefono: null,
        mail: null,
    };

    if (dni === '12345678a') {
        datos.nombre = 'Juan García';
        datos.direccion_recogida = 'CALLE CARRETAS, 6';
        datos.telefono = '666777888';
    }

    return datos;
};
