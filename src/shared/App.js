import React, { Component } from 'react';
import Nav from 'components/Nav';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main, About, Print, Automation, News, NotFound } from 'route';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <div id="Route">
          <Switch>
            <Route exact path={"/printice/"} component={Main}/>
            <Route path={"/printice/About"} component={About}/>
            <Route path={"/printice/Print/:category"} component={Print}/>
            <Route path={"/printice/Automation"} component={Automation}/>
            <Route path={"/printice/News"} component={News}/>
            <Route component={NoMatchPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}
const NoMatchPage = () => {
  return (
    <NotFound />
  );
};
export default withRouter(App);
