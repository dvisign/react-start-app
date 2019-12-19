import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from 'components/board/List';
import View from 'components/board/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/auto.scss";
// img
import headerImg from 'img/print/pageheader.jpg';

class Automation extends Component {
  componentDidMount() {
    event.pagenations("Print", "3")
  }
  render() {
    console.log("auto page render")
    return (
      <main id="autoPage">
        <PageHeader 
          page="Automation"
          pagebg={headerImg}
          pageText="자동화 장비"
          title="printis 자동화 장비"
        />
        <section id="printConts">
          <div id="printNavs">
            <MDBContainer>
              <ul id="printNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/touch/"}>터치설비 / 장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/robot/"}>로보트 자동화</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/auto/"}>자동설비 / 장비</NavLink>
                </li>
              </ul>
            </MDBContainer>
          </div>
          <div id="autoConts" className="boardListConts">
            <MDBContainer>
              <Switch>
                <Route 
                  exact 
                  path={`/:page?/:board?/:category`} 
                  component={List}
                />
                <Route  
                  path={`/:page?/:board?/:category?/:id`} 
                  component={View}
                />
              </Switch>
            </MDBContainer>
          </div>
        </section>
      </main>
    )
  }
}

export default Automation;