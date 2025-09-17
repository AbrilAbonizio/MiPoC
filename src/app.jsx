import { useState } from 'preact/hooks';
import './app.css';
import { Card } from './Components/Card.jsx';
import { Button } from './Components/Button.jsx';
import { AgregarAlumno } from './Components/AgregarAlumno.jsx';
import { ModificarDatos } from './Components/ModificarDatos.jsx';
import { EliminarAlumno } from './Components/EliminarAlumno.jsx';
import { ConsultarDatos } from './Components/ConsultarDatos.jsx';

export function App() {
  // hardcodeo de datos
  const [alumnos, setAlumnos] = useState([
    {
      legajo: 1,
      nombre: 'Juan',
      apellido: 'ASD',
      fechaNacimiento: '2003-02-01',
      carrera: 'Ingeniería en Sistema',
      planDeCarrera: '2020',
      usuario: 'juan123',
      contrasena: 'password123',
    },
    {
      legajo: 2,
      nombre: 'María',
      apellido: 'QWE',
      fechaNacimiento: '2002-04-03',
      carrera: 'Licenciatura en Informática',
      planDeCarrera: '2019',
      usuario: 'maria456',
      contrasena: 'password456',
    },
    {
      legajo: 3,
      nombre: 'Pedro',
      apellido: 'ZXC',
      fechaNacimiento: '2001-06-05',
      carrera: 'Ingeniería en Sistemas de Información',
      planDeCarrera: '2021',
      usuario: 'pedro789',
      contrasena: 'password789',
    },
  ]);

  //Mapeo de los componentes botones
  const [selected, setSelected] = useState('');

  const componentsMap = {
    agregar: (props) => <AgregarAlumno {...props} />,
    modificar: (props) => <ModificarDatos {...props} />,
    consultar: (props) => <ConsultarDatos {...props} />,
    eliminar: (props) => <EliminarAlumno {...props} />,
  };

  const SelectedComponent = selected ? componentsMap[selected] : null;

  //Consultar datos

  return (
    <div className="app-main">
      <Card className="card-centered">
        <div className="app-buttons">
          <Button
            option="Agregar Alumno"
            onSelect={() => setSelected('agregar')}
          />
          <Button
            option="Consultar Datos"
            onSelect={() => setSelected('consultar')}
          />
          <Button
            option="Modificar Datos"
            onSelect={() => setSelected('modificar')}
          />
          <Button
            option="Eliminar Alumno"
            onSelect={() => setSelected('eliminar')}
          />
        </div>
        {SelectedComponent && (
          <SelectedComponent alumnos={alumnos} setAlumnos={setAlumnos} />
        )}
      </Card>
    </div>
  );
}
