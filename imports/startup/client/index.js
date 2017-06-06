/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Lodash from '../../ui/pages/Lodash.js';

Meteor.startup(() => {
  render(
    <div>
      <h2>Lodash below</h2>
      <Lodash />
    </div>,
    document.getElementById('react-root'),
  );
});
