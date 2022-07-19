import { v1 as uuidv1 } from 'uuid';
import 'uuid';

export default () => {
    return {
        // Datos genéricos
        id_conversacion: uuidv1(),
        action: '',
        modoPresentacion: 'AV',

        // Datos de contacto
        nombre: '',
        telefono: '',
        mail: '',

        // Validación dni
        dni: '',
        dni_valido: '',

        // Validación muebles
        muebles_mensaje: '',
        muebles_desglose: [{ nombre: '', numero: '' }],
        muebles_count: '',

        // Validación solicitud (entrada)
        direccion_recogida: '',

        // Validación solicitud (salida)
        calle: '',
        numero: '',
        zona: '',
        fecha_recogida: '',
        hora_recogida: '',
        lugar_recogida: '',
        solicitud_completa: '',
    };
};
