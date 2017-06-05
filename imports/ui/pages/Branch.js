import React from 'react';
import Loadable from 'react-loadable';
import { Jumbotron } from 'react-bootstrap';

const LoadingComponent = () => <span className="text-muted"><i className="fa fa-refresh" /></span>;
const Branch = Loadable({
  loader: () => import('../components/Branch'),
  LoadingComponent,
  delay: 200,
});

class BranchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  loadBranch = () => this.setState({ loaded: true });

  render() {
    return (
      <div className="BranchPage">
        <Jumbotron>
          <div className="text-center">
            <h2>Example for Meteor 1.5: Tunk</h2>
          </div>
          {this.state.loaded ? (
            <div>
              <p>
                This page has dynamicly load the <em>Branch - Leaf</em>
              </p>
              <Branch />
            </div>
          ) : (
            <p>
              This page will dynamicly load the <em>Branch - Leaf</em>, after you click
              &nbsp;
              <button className="btn btn-primary" onClick={this.loadBranch}>Load Branch</button>
            </p>
          )}
        </Jumbotron>
        <p>Take a look at the console.</p>
        <p><img src="https://puu.sh/wbcYg/0d6adb7c7a.png" alt="screenshot" /></p>
      </div>
    );
  }
}

export default BranchPage;
