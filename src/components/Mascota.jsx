import React from 'react';

// Componente que representa a una mascota individual
const Mascota = ({ mascota, onSelect }) => {
  return (
    <div onClick={onSelect} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {/* Muestra la imagen de la mascota */}
      <img src={mascota.imagen} alt={mascota.nombre} style={{ width: '150px', height: '150px' }} />
      {/* Nombre de la mascota */}
      <h2>{mascota.nombre}</h2>
      {/* Tipo y edad de la mascota */}
      <p>{mascota.tipo} - {mascota.edad}</p>
      {/* Descripción física de la mascota, eliminando cualquier etiqueta HTML */}
      <p>{mascota.desc_fisica.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      {/* Enlace a más detalles de la mascota */}
      <a href={mascota.url} target="_blank" rel="noreferrer">Más detalles</a>
    </div>
  );
};

export default Mascota;
