import { useState } from 'preact/hooks';
import { Formulario } from './Formulario.jsx';

export function ModificarDatos(props) {
  const { alumnos, setAlumnos } = props;
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [alumnoActual, setAlumnoActual] = useState(null);

  const buscarAlumno = (ev) => {
    // Toma el legajo ingresado en el input
    const legajoBuscado = ev.target.value;

    // Busca el legajo ingresado en el arreglo alumnos
    const alumnoEncontrado = alumnos.find(
      (alumno) => alumno.legajo.toString() === legajoBuscado
    );
    setAlumnoActual(alumnoEncontrado || null);
    setMostrarFormulario(!!alumnoEncontrado);
  };

  // Actualiza el alumno en el array global
  const handleSubmit = (datosActualizados) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((al) =>
        al.legajo === Number(datosActualizados.legajo) ? datosActualizados : al
      )
    );
    setMostrarFormulario(false);
    setAlumnoActual(null);
    alert('Datos actualizados correctamente');
  };

  return (
    <div>
      <div className="control-item">
        <div style="margin-right:20px">Legajo: </div>
        <span></span>
        <input
          type="text"
          className="form-control"
          id="legajo"
          name="legajo"
          placeholder="Buscar por Legajo"
          onChange={buscarAlumno}
        />
      </div>
      {mostrarFormulario && alumnoActual && (
        <Formulario alumno={alumnoActual} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
