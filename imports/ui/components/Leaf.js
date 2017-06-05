import React from 'react';
import _ from 'lodash';

console.log('Leaf JS in Client');

const Leaf = () => {
  console.log('Leaf rendered');
  return (
    <div style={{ marginLeft: 10 }}>
      <h3>
        Leaf
        &nbsp;
        <i className="fa fa-leaf"/>
      </h3>
    </div>
  );
};
export default Leaf;
