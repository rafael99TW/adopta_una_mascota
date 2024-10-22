import React, { useState } from 'react';

// Componente de formulario para adoptar una mascota
const FormularioAdopcion = ({ mascota }) => {
  // Definición del state para manejar los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    // Aquí se puede agregar lógica para enviar la solicitud de adopción
    alert(`Solicitud enviada para adoptar a ${mascota.nombre}`); // Muestra una alerta de confirmación
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Adopción para {mascota.nombre}</h2>
      <div>
        {/* Campo de nombre */}
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        {/* Campo de email */}
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        {/* Campo de dirección */}
        <label>Dirección:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit">Enviar Solicitud</button>
    </form>
  );
};

export default FormularioAdopcion;
