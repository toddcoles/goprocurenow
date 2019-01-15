import React from 'react';

export default () => {
  return (
    <footer className="text-white bg-dark mt-5 p-4 text-center">
      {/*style={{ backgroundColor: '#52575B' }} For Vectrus color grey background*/}
      Copyright &copy; {new Date().getFullYear()} Vectrus
    </footer>
  );
};
