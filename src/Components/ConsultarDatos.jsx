// Importación de componentes y hooks necesarios
import { Button } from "./Button.jsx";
import { useState } from "preact/hooks";

export function ConsultarDatos(props) {
  // Destructuración de props para obtener la lista de alumnos
  const { alumnos } = props;
  // Estado para almacenar los alumnos que se mostrarán en la lista
  const [selectedAlumnos, setSelectedAlumnos] = useState([]);

  // Función que se ejecuta al hacer click en "Consultar Todos"
  // Muestra todos los alumnos disponibles
  const mostrarTodos = () => {
    setSelectedAlumnos(alumnos);
  };

  // INPUT FUNCIONES Función que maneja la búsqueda por legajo en tiempo real
  const handleInput = (e) => {
    // Obtiene el valor actual del campo de búsqueda
    const legajoBuscado = e.target.value;

    // Si el campo está vacío, limpia la lista de alumnos mostrados
    if (legajoBuscado.trim() === "") {
      setSelectedAlumnos([]);
      return;
    }

    // Filtra los alumnos cuyo legajo coincida con la búsqueda
    const alumnosEncontrados = alumnos.filter((alumno) =>
      alumno.legajo.toString().includes(legajoBuscado)
    );
    // Actualiza el estado con los alumnos encontrados
    setSelectedAlumnos(alumnosEncontrados);
  };

  return (
    <div className="consulta-container">
      {/* Contenedor de los controles de búsqueda */}
      <div className="controles-container">
        {/* BOTON para mostrar todos los alumnos */}
        <div className="control-item">
          <Button option="Consultar Todos" onSelect={mostrarTodos} />
        </div>
        {/* INPUT de búsqueda por legajo */}
        <div className="control-item">
          <input
            type="text"
            className="form-control"
            id="legajo"
            placeholder="Buscar por Legajo"
            onInput={(e) => handleInput(e)}
          />
        </div>
      </div>

      {/* Sección que muestra los resultados (solo si hay alumnos seleccionados) */}
      {selectedAlumnos.length > 0 && (
        <div className="datos-container">
          <h3>Lista de Alumnos</h3>
          {/* Encabezado de la tabla */}
          <div className="header-row">
            <span>
              <strong>Legajo</strong>
            </span>
            <span>
              <strong>Nombre</strong>
            </span>
            <span>
              <strong>Carrera</strong>
            </span>
            <span>
              <strong>Plan</strong>
            </span>
          </div>
          {/* Lista de alumnos */}
          <div className="alumnos-list">
            {selectedAlumnos.map((alumno) => (
              <div key={alumno.legajo} className="alumno-row">
                <span>{alumno.legajo}</span>
                <span>
                  {alumno.nombre} {alumno.apellido}
                </span>
                <span>{alumno.carrera}</span>
                <span>{alumno.planDeCarrera}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
