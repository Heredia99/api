import express from 'express';
import config from './config.js';

const app = express();

config(app);

app.get('/', (req, res) => {
    res.status(200).json({ data: 'recibido' });
});

app.post('/', (req, res) => {
    const correcto = ['12345678a', '87654321z', '11223344a'].includes(
        req.body.dni
    );
    res.status(201).json({
        id_conversacion: '14584215452',
        action: 'dni_validate',
        modoPresentacion: 'AV',
        dni: req.body.dni,
        dni_valido: true,
        nombre: 'John Doe',
        direccion_recogida: 'CALLE CARRETAS, 6',
        calle: 'CARRETAS',
        numero: '6',
        telefono: '666777888',
        mail: null,
        muebles_mensaje: 'un par de sillas y un sofa',
        muebles_desglose: [
            {
                nombre: 'silla',
                numero: 2,
            },
            {
                nombre: 'sofa',
                numero: 1,
            },
        ],
        muebles_count: 3,
        zona: 'CENTRO',
        fecha_recogida: '12/07/2022',
        hora_recogida: '07:00',
        lugar_recogida:
            'Isla de contenedores de la calle de la Palma esquina con calle Real / En el portal de CALLE CARRETAS, 6',
        solicitud_completa: false,
    });
});

app.listen('9000', () => console.log('Servidor abierto en localhost:9000'));
