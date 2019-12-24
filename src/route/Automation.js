import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from 'components/board/product/List';
import View from 'components/board/product/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/auto.scss";

class Automation extends Component {
  constructor(props) {
    super(props);
    this.scrollEvent.bind(this);
  }
  componentDidMount() {
    event.pagenations("Print", "3")
    event.pageIn("#autoPage")
    window.addEventListener('scroll',this.scrollEvent, false)
  }
  componentWillUnmount() {
    event.pageOut("#autoPage")
    window.removeEventListener('scroll',this.scrollEvent, false)
  }
  scrollEvent = () => {
    event.tabNavs("#autoNavs");
  }
  render() {
    console.log("auto page render")
    return (
      <main id="autoPage">
        <PageHeader 
          page="Automation"
          pagebg="http://printis.cdn3.cafe24.com/print/pageheader.jpg"
          pageText="자동화 장비"
          title="PRINTIS 자동화 장비"
        />
        <section id="autoConts">
          <div id="autoNavs" className="tabNavWrapper">
            <MDBContainer>
              <ul id="autoNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/touch"}>TOUCH 장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/robot"}>로보트 자동화</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Automation/autos/auto"}>자동화 장비</NavLink>
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