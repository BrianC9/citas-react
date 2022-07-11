import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaPacientes from './components/ListaPacientes';
import { useState, useEffect } from 'react';
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  useEffect(() => {
    const leerLS = () => {
      const check = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(check);
    };
    leerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteSeleccionado={pacienteSeleccionado}
          setPacienteSeleccionado={setPacienteSeleccionado}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPacienteSeleccionado={setPacienteSeleccionado}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
