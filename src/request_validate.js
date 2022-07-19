export default (direccion) => {
  return {
    num_bultos_recoger: 3,
    solicitud_completa: !direccion.includes("amargura"),
    direccion_recogida: "ISLA CONTENEDORES ESQUINA ROSARIO",
    fecha_recogida: "2022-07-06",
    hora_recogida: "07:00",
  };
};
