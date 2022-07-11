import { useEffect } from 'react';
import Paciente from './Paciente';
function ListaPacientes({
  pacientes,
  setPacienteSeleccionado,
  eliminarPaciente,
}) {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes.length === 0 ? (
        <p className='font-black text-3xl text-center'>Agrega tus pacientes</p>
      ) : (
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      )}

      <p className='text-lg mt-5 text-center mb-10'>
        Administra tus {''}
        <span className='font-bold text-indigo-600 '>Pacientes y Citas</span>
      </p>

      {pacientes.map((paciente) => {
        return (
          <Paciente
            paciente={paciente}
            setPacienteSeleccionado={setPacienteSeleccionado}
            eliminarPaciente={eliminarPaciente}
            key={paciente.id}
          />
        );
      })}
    </div>
  );
}

export default ListaPacientes;
