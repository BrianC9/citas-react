import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';
import { v4 as uuid } from 'uuid';

function Formulario({
  pacientes,
  setPacientes,
  pacienteSeleccionado,
  setPacienteSeleccionado,
}) {
  const [formData, setFormData] = useState({
    nombreMascota: '',
    nombrePropietario: '',
    numero: '',
    email: '',
    fechaAlta: '',
    motivo: '',
  });
  const [error, setSerror] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteSeleccionado).length > 0) {
      setFormData(pacienteSeleccionado);
      console.log(pacienteSeleccionado);
    }
  }, [pacienteSeleccionado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion
    const isEmpty = Object.values(formData).some((x) => x === '');

    if (isEmpty) {
      setSerror(true);
    } else {
      setSerror(false);

      if (pacienteSeleccionado.id) {
        console.log('editando');
        const pacienteState = structuredClone(formData);
        pacienteState.id = pacienteSeleccionado.id;
        const pacientesActualizados = pacientes.map((pacienteActualizado) =>
          pacienteActualizado.id === pacienteSeleccionado.id
            ? pacienteState
            : pacienteActualizado
        );
        setPacientes(pacientesActualizados);
        setPacienteSeleccionado({});
      } else {
        console.log('Nuevo paciente');
        setPacientes((prevState) => {
          formData.id = uuid();
          return [...prevState, formData];
        });
      }

      //Reiniciamos el formulario
      setFormData({
        nombreMascota: '',
        nombrePropietario: '',
        numero: '',
        email: '',
        fechaAlta: '',
        motivo: '',
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='font-bold text-indigo-600 '>Administralos</span>
      </p>

      <form
        id='formAlta'
        onSubmit={handleSubmit}
        className='bg-white py-10 px-5 rounded-lg shadow-md mb-10'
      >
        {error && <Error mensaje='Todos los campos son obligatiorios' />}
        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='nombreMascota'
          >
            Nombre Mascota
          </label>
          <input
            type='text'
            id='nombreMascota'
            placeholder='Nombre de mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.nombreMascota}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='nombrePropietario'
          >
            Nombre del Propiertario
          </label>
          <input
            type='text'
            id='nombrePropietario'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.nombrePropietario}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='numero'
          >
            Número de contacto
          </label>
          <input
            type='tel'
            id='numero'
            placeholder='Número teléfono'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.numero}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='email'
          >
            Email propietario
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='fechaAlta'
          >
            Fecha de alta
          </label>
          <input
            type='date'
            id='fechaAlta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.fechaAlta}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block font-bold text-gray-700 uppercase'
            htmlFor='motivo'
          >
            Motivo del alta
          </label>
          <textarea
            id='motivo'
            placeholder='Motivo del alta del paciente...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={formData.motivo}
            onChange={handleChange}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-500 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all '
          value={
            Object.keys(pacienteSeleccionado).length > 0
              ? 'Modificar paciente'
              : 'Agregar paciente'
          }
        />
      </form>
    </div>
  );
}

export default Formulario;
