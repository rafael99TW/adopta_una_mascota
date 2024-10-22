import React, { useState } from 'react';

// Componente que permite filtrar las mascotas por tipo, edad y tamaño
const FiltroMascotas = ({ aplicarFiltro }) => {
  // Definición del state para manejar los valores de los filtros
  const [tipo, setTipo] = useState('');
  const [edad, setEdad] = useState('');
  const [tamano, setTamano] = useState('');

  // Función que se ejecuta al enviar el formulario de filtros
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    aplicarFiltro({ tipo, edad, tamano }); // Aplica los filtros seleccionados
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Selección del tipo de mascota */}
        <label>Tipo de mascota:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Todos</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Conejo">Conejo</option>
        </select>
      </div>
      <div>
        {/* Selección de la edad */}
        <label>Edad:</label>
        <select value={edad} onChange={(e) => setEdad(e.target.value)}>
          <option value="">Cualquier edad</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Adulto">Adulto</option>
        </select>
      </div>
      <div>
        {/* Selección del tamaño */}
        <label>Tamaño:</label>
        <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
          <option value="">Cualquier tamaño</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      {/* Botón para aplicar los filtros */}
      <button type="submit">Aplicar filtros</button>
    </form>
  );
};

export default FiltroMascotas;
