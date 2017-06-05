import React from 'react';
import Leaf from './Leaf';

console.log('Twig JS in Client');

const Twig = () => {
  console.log('Twig rendered');
  return (
    <div style={{ marginLeft: 10 }}>
      <h3>Twig</h3>
      <Leaf />
    </div>
  );
};
export default Twig;
