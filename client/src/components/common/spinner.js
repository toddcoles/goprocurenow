import React from 'react';
import spinner from './Vectruslogo.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '80px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};
