import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Main, About, Print, Automation, News } from 'route';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/printice/"} component={Main}/>
        <Route path={"/printice/About"} component={About}/>
        <Route path={"/printice/Print"} component={Print}/>
        <Route path={"/printice/Automation"} component={Automation}/>
        <Route path={"/printice/News"} component={News}/>
      </Switch>
    );
  }
}
export default Routes