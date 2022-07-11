import React from 'react';
function Paciente({ paciente, setPacienteSeleccionado, eliminarPaciente }) {
  const {
    nombreMascota,
    nombrePropietario,
    numero,
    email,
    fechaAlta,
    motivo,
    id,
  } = paciente;
  const handleDelete = () => {
    const respuesta = confirm('Deseas eliminar al paciente ' + nombreMascota);
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className='bg-white m-3 py-10 px-5 rounded-xl shadow-md mx-5 my-10'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre mascota: {''}
        <span className='font-normal normal-case'>{nombreMascota}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre propietario: {''}
        <span className='font-normal normal-case'>{nombrePropietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Número contacto: {''}
        <span className='font-normal normal-case'>{numero}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email contacto: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha alta: {''}
        <span className='font-normal normal-case'>{fechaAlta}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Motivo del alta: {''}
        <span className='font-normal normal-case'>{motivo}</span>
      </p>
      <div className='flex justify-between mt-5'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white uppercase font-bold rounded-lg '
          onClick={() => setPacienteSeleccionado(paciente)}
        >
          Editar
        </button>
        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-900 text-white uppercase font-bold rounded-lg '
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
