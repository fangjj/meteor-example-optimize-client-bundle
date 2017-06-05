import React from 'react';
import Loadable from 'react-loadable';
import { Jumbotron } from 'react-bootstrap';

const LoadingComponent = () => <span className="text-muted"><i className="fa fa-refresh" /></span>;
const Trunk = Loadable({
  loader: () => import('../components/Trunk'),
  LoadingComponent,
  delay: 200,
});

class TrunkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  loadTrunk = () => this.setState({ loaded: true });

  render() {
    return (
      <div className="TrunkPage">
        <Jumbotron>
          <div className="text-center">
            <h2>Example for Meteor 1.5: Tunk</h2>
          </div>
          {this.state.loaded ? (
            <div>
              <p>
                This page has dynamicly load the <em>Trunk - Leaf</em>
              </p>
              <Trunk />
            </div>
          ) : (
            <p>
              This page will dynamicly load the <em>Trunk - Leaf</em>, after you click
              &nbsp;
              <button className="btn btn-primary" onClick={this.loadTrunk}>Load Trunk</button>
            </p>
          )}
        </Jumbotron>
        <p>Take a look at the console.</p>
        <p><img src="https://puu.sh/wbcM5/c62a8e426c.png" alt="screenshot" /></p>
      </div>
    );
  }
}

export default TrunkPage;
