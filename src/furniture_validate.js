export default (muebles) => {
  return {
    muebles,
    cerrar_conversacion: false,
    bultos_correctos: !muebles.includes("muchos"),
    bultos_maximo: 3,
    bultos_no_permitidos: muebles.includes("cama") ? "cama" : "",
  };
};
