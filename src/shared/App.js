import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes  from 'route/Routes';
import Nav from 'components/Nav';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <div id="Route">
          <Routes />
        </div>
      </div>
    )
  }
}
export default withRouter(App);
