import React from 'react';
import Branch from './Branch';

console.log('Limb JS in Client');

const Limb = () => {
  console.log('Limb rendered');
  return (
    <div style={{ marginLeft: 10 }}>
      <h3>Limb</h3>
      <Branch />
    </div>
  );
}
export default Limb;
