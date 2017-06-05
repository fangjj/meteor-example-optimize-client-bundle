import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
import ExampleDates from '../components/ExampleDates';

const Index = () => (
  <div className="Index">
    <Jumbotron>
      <div className="text-center">
        <h2>Dates Example for Meteor 1.5</h2>
      </div>
      <p>We are making a very simple component to pick and render dates.</p>
      <p>
        This is our main setup for
        <a href="https://code.zeroasterisk.com/2017/05/meteor-1-5-bundle-optimization/">
          this blog post
        </a>, which should tell you a lot about dynamic imports and how to get the most out of them.
      </p>
      <Link to="/Dates" className="btn btn-link">Date Range Picker</Link>


      <div className="text-center">
        <h2>Trunk / Branch Example</h2>
      </div>
      <p>This example takes a look at loading trees.</p>
      <pre>
        Given a <em>Trunk - Leaf</em> structure.
        And a <em>Branch - Leaf</em> sub-structure.
        When you load Branch, then load Trunk
        Then Branch and all decendants are loaded twice....
        But only imported once.
      </pre>
      <p>Take a look at the console.</p>
      <p><img src="https://puu.sh/wbcVJ/ccfac76efc.png" alt="screenshot" /></p>
      <p>That caused me to believe they were in fact imported twice... but they were not.</p>
      <p>In fact, if you look at the webframes, you can see that Leaf component is only imported 1 time.</p>
      <p><img src="https://puu.sh/wbdrg/1e9d059d96.png" alt="screenshot" /></p>
      <p><img src="https://puu.sh/wbdrP/9106658bc2.png" alt="screenshot" /></p>
      <p>And it is more obvious, when you load the Trunk first and the Branch second:</p>
      <p><img src="https://puu.sh/wbe2H/3caac65457.png" alt="screenshot" /></p>
      <p>Then there is not second import for Branch, because it was already imported above...</p>
      <p>
        <em>I thought this component registry was only for dynamic import trees... but it seems to work for all imports.</em>
      </p>
    </Jumbotron>
  </div>
);

export default Index;
