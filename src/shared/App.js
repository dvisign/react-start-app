import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main, About, Print, Automation, News, NotFound } from 'route';

class App extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <div id="Route">
          <Switch>
            <Route exact path={"/printis/"} component={Main}/>
            <Route path={"/printis/About"} component={About}/>
            <Route path={"/printis/Print/:category"} component={Print}/>
            <Route path={"/printis/Automation/:category"} component={Automation}/>
            <Route path={"/printis/News"} component={News}/>
            <Route component={NoMatchPage}/>
          </Switch>
        </div>
        <Footer />
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
