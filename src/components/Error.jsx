import React from 'react';

function Error({ mensaje }) {
  return (
    <div className='bg-red-500 text-white p-2 mb-3 rounded-md font-bold'>
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
