import React from 'react';
import Twig from './Twig';

console.log('Branch JS in Client');

const Branch = () => {
  console.log('Branch rendered');
  return (
    <div style={{ marginLeft: 10 }}>
      <h3>Branch</h3>
      <Twig />
    </div>
  );
};
export default Branch;
