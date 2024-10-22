import React from 'react';

// Componente que muestra la lista de mascotas, aplicando filtros y permitiendo seleccionar una mascota
const ListaMascotas = ({ mascotas, filtros, onSelect }) => {
  // Función para filtrar las mascotas basadas en los filtros seleccionados
  const filtrarMascotas = (mascota) => {
    const esCachorro = mascota.edad.toLowerCase().includes('mes'); // Verifica si es cachorro
    const esPequeño = mascota.desc_fisica.toLowerCase().includes('peque'); // Verifica si es pequeño
    const esMediano = mascota.desc_fisica.toLowerCase().includes('mediano'); // Verifica si es mediano
    const esGrande = mascota.desc_fisica.toLowerCase().includes('grande'); // Verifica si es grande
  
    // Retorna verdadero si la mascota cumple con todos los filtros
    return (
      (filtros.tipo === '' || mascota.tipo === filtros.tipo) &&
      (filtros.edad === '' || (filtros.edad === 'Cachorro' && esCachorro) || (filtros.edad === 'Adulto' && !esCachorro)) &&
      (filtros.tamano === '' || 
        (filtros.tamano === 'Pequeño' && esPequeño) || 
        (filtros.tamano === 'Mediano' && esMediano) || 
        (filtros.tamano === 'Grande' && esGrande))
    );
  };

  return (
    <div className="mascotas-grid">
      {/* Muestra las mascotas que cumplen con los filtros */}
      {mascotas.filter(filtrarMascotas).map((mascota) => (
        <div className="mascota-card" key={mascota.id}>
          {/* Imagen de la mascota */}
          <img src={mascota.imagen} alt={mascota.nombre} />
          <h2>{mascota.nombre}</h2>
          {/* Descripción de la mascota sin las etiquetas <p> */}
          <p>{mascota.desc_fisica.replace(/<\/?p>/g, '')}</p>
          {/* Botón para seleccionar la mascota */}
          <button onClick={() => onSelect(mascota)}>Adoptar</button>
        </div>
      ))}
    </div>
  );
};

export default ListaMascotas;
