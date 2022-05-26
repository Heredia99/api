import express from 'express';
import config from './config.js';
import datosAsociadosDni from './datosAsociadosDni.js';

import validarDni from './validarDni.js';

const app = express();

config(app);

app.post('/', (req, res) => {
    const { action } = req.body;
    let respuesta = { ...req.body };

    if (action === 'dni_validation') {
        const dni = req.body.dni;

        const dni_valido = validarDni(dni);

        const dni_datos = datosAsociadosDni(dni);

        respuesta = { ...respuesta, dni, dni_valido, ...dni_datos };
    } else if (action === 'request_validation') {
        console.log('Solicitud recibida:');
        console.log(respuesta);
        respuesta = {
            ...respuesta,
            lugar_recogida: 'calle amargura 12',
            solicitud_completa: true,
        };
    }
    res.status(201).json(respuesta);
});

app.listen('9000', () => console.log('Servidor abierto en localhost:9000'));
