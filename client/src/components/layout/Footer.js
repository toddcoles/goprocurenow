import React from 'react';

export default () => {
  return (
    <footer className="text-white bg-dark p-2 text-center footer">
      {/*style={{ backgroundColor: '#52575B' }} For Vectrus color grey background*/}
      Copyright &copy; {new Date().getFullYear()} Vectrus
    </footer>
  );
};
