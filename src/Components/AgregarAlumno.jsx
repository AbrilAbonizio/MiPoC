import { Formulario } from './Formulario.jsx';

export function AgregarAlumno(props) {
  const { alumnos, setAlumnos } = props;

  // Recibe los datos del formulario y agrega el alumno al arreglo global
  const obtenerInputs = (formData) => {
    // Obtiene el último legajo y lo incrementa en 1
    const ultimoLegajo =
      alumnos.length > 0
        ? Math.max(...alumnos.map((alumno) => alumno.legajo))
        : 0;
    const nuevoLegajo = ultimoLegajo + 1;

    const nuevoAlumno = {
      ...formData,
      legajo: nuevoLegajo,
    };
    setAlumnos([...alumnos, nuevoAlumno]);
    alert('Alumno agregado correctamente');
  };

  return <Formulario handleSubmit={obtenerInputs} />;
}
