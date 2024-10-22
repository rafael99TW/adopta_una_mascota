import React, { useState, useEffect } from 'react';
import FiltroMascotas from './components/FiltroMascotas';
import ListaMascotas from './components/ListaMascotas';
import FormularioAdopcion from './components/FormularioAdopcion';
import './App.css';

//Componente principal
const App = () => {
  // Definición del state para manejar la lista de mascotas, los filtros, la mascota seleccionada, y el estado del modal
  const [mascotas, setMascotas] = useState([]); // Lista de mascotas que se cargan desde la API
  const [filtros, setFiltros] = useState({ tipo: '', edad: '', raza: '', tamano: '' }); // Estado para los filtros seleccionados
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null); // Estado para la mascota seleccionada para adopción
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto o no

  // useEffect que se ejecuta al montar el componente para cargar las mascotas desde una API externa
  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => setMascotas(data.data)) // Almacena las mascotas obtenidas en el estado
      .catch(err => console.error('Error al cargar datos:', err));
  }, []);

  // Función para actualizar los filtros
  const filtrarMascotas = (filtros) => {
    setFiltros(filtros);
  };

  // Función para seleccionar una mascota y abrir el modal
  const seleccionarMascota = (mascota) => {
    setMascotaSeleccionada(mascota); // Define la mascota seleccionada
    setIsModalOpen(true); // Abre el modal
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div>
      <h1>Formulario de Adopción</h1>
      <div className={isModalOpen ? 'modal-background-blur' : ''}>
        {/* Componente de filtro para aplicar filtros a la lista de mascotas */}
        <FiltroMascotas aplicarFiltro={filtrarMascotas} />
        {/* Componente de lista de mascotas que muestra las mascotas filtradas */}
        <ListaMascotas mascotas={mascotas} filtros={filtros} onSelect={seleccionarMascota} />
      </div>
      
      {/* Modal que se muestra si hay una mascota seleccionada */}
      {mascotaSeleccionada && (
        <div className={`modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-content">
            {/* Botón para cerrar el modal */}
            <span className="close-button" onClick={cerrarModal}>&times;</span>
            {/* Formulario de adopción que pasa la mascota seleccionada */}
            <FormularioAdopcion mascota={mascotaSeleccionada} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
