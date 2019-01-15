import React from 'react';
import spinner from './loading.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '380px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};
