import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ExampleDates from '../components/ExampleDates';

const Dates = () => (
  <div className="Dates">
    <Jumbotron className="text-center">
      <h2>Example for Meteor 1.5: Dates</h2>
      <p>
        The following component is dynamicly loaded,
        so it doesn&quot;t count towards the clientside JS bundle.
      </p>
      <ExampleDates />
    </Jumbotron>
  </div>
);

export default Dates;
