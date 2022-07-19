export default (dni) => {
    const numero = parseInt(dni.substring(0, 8));
    const letra = dni.charAt(8).toUpperCase();
    const dni_valido = 'TRWAGMYFPDXBNJZSQVHLCKET'.charAt(numero % 23) === letra;

    return { dni, dni_valido };
};
