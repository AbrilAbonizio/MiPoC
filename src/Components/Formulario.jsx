import { useState, useEffect } from 'preact/hooks';

export function Formulario(props) {
  const { handleSubmit, alumno, disabled = false } = props;

  // Estado local para los datos del formulario, inicializado con alumno si existe
  const [formData, setFormData] = useState({
    legajo: alumno?.legajo || '',
    nombre: alumno?.nombre || '',
    apellido: alumno?.apellido || '',
    fechaNacimiento: alumno?.fechaNacimiento || '',
    carrera: alumno?.carrera || '',
    planDeCarrera: alumno?.planDeCarrera || '',
    usuario: alumno?.usuario || '',
    contraseña: alumno?.contraseña || '',
  });

  // Actualiza el estado si cambia el alumno (por ejemplo, al buscar otro alumno)
  useEffect(() => {
    setFormData({
      legajo: alumno?.legajo || '',
      nombre: alumno?.nombre || '',
      apellido: alumno?.apellido || '',
      fechaNacimiento: alumno?.fechaNacimiento || '',
      carrera: alumno?.carrera || '',
      planDeCarrera: alumno?.planDeCarrera || '',
      usuario: alumno?.usuario || '',
      contraseña: alumno?.contraseña || '',
    });
  }, [alumno]);

  // Maneja cambios en cualquier input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Forzar legajo a número si existe
    const datos = {
      ...formData,
      legajo: formData.legajo ? Number(formData.legajo) : undefined,
    };
    handleSubmit(datos);

    // Solo limpiar si es un alta (sin legajo)
    if (!formData.legajo) {
      setFormData({
        legajo: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        carrera: '',
        planDeCarrera: '',
        usuario: '',
        contraseña: '',
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          disabled={disabled}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          disabled={disabled}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fechaNac" className="form-label">
          Fecha de Nacimiento
        </label>
        <input
          onChange={handleChange}
          type="date"
          className="form-control"
          id="fechaNac"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          disabled={disabled}
        />
      </div>
      {/* El campo email no se usa en AgregarAlumno, puedes eliminarlo si no lo necesitas */}
      <div className="mb-3">
        <label htmlFor="carrera" className="form-label">
          Carrera
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="carrera"
          name="carrera"
          value={formData.carrera}
          disabled={disabled}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="plan" className="form-label">
          Plan de Carrera
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="plan"
          name="planDeCarrera"
          value={formData.planDeCarrera}
          disabled={disabled}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="usuario"
          name="usuario"
          value={formData.usuario}
          disabled={disabled}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">
          Contraseña
        </label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          id="contraseña"
          name="contraseña"
          value={formData.contraseña}
          disabled={disabled}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Hecho
      </button>
    </form>
  );
}
