import { useState } from 'preact/hooks';
import { Formulario } from './Formulario.jsx';

export function EliminarAlumno(props) {
  const { alumnos, setAlumnos } = props;
  const [alumnoActual, setAlumnoActual] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

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

  const handleSubmit = () => {
    if (confirm('¿Seguro que quieres eliminar?')) {
      setAlumnos((prevAlumnos) =>
        prevAlumnos.filter((al) => al.legajo !== alumnoActual.legajo)
      );
    }
    setMostrarFormulario(false);
    setAlumnoActual(null);
    alert('Alumno eliminado correctamente');
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
        <Formulario
          alumno={alumnoActual}
          handleSubmit={handleSubmit}
          disabled={true}
        />
      )}
    </div>
  );
}
