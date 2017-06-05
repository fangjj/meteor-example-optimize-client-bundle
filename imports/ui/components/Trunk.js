import React from 'react';
import Limb from './Limb';

console.log('Trunk JS in Client');

const Trunk = () => {
  console.log('Trunk rendered');
  return (
    <div style={{ marginLeft: 10 }}>
      <h3>Trunk</h3>
      <Limb />
    </div>
  );
};
export default Trunk;
