import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from 'components/board/List';
import View from 'components/board/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/print.scss";
// img
import headerImg from 'img/print/pageheader.jpg';

class Print extends Component {
  componentDidMount() {
    event.pagenations("Print", "2")
  }
  render() {
    console.log("print page render")
    return ( 
      <main id="printPage">
        <PageHeader 
          page="print"
          pagebg={headerImg}
          pageText="인쇄장비"
          title="printis 인쇄장비"
        />
        <section id="printConts">
          <div id="printNavs">
            <MDBContainer>
              <ul id="printNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/print/"}>인쇄장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/label/"}>라벨장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/engraving/"}>제판설비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/dry/"}>건조장비</NavLink>
                </li>
              </ul>
            </MDBContainer>
          </div>
          <div id="printConts" className="boardListConts">
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
export default Print;