import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from 'components/board/product/List';
import View from 'components/board/product/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/print.scss";

class Print extends Component {
  constructor(props) {
    super(props);
    this.scrollEvent.bind(this);
  }
  componentDidMount() {
    event.pagenations("Print", "2")
    event.pageIn("#printPage")
    window.addEventListener('scroll',this.scrollEvent, false)
  }
  componentWillUnmount() {
    event.pageOut("#printPage")
    window.removeEventListener('scroll',this.scrollEvent, false)
  }
  scrollEvent = () => {
    event.tabNavs("#printNavs");
  }
  render() {
    console.log("print page render")
    return ( 
      <main id="printPage">
        <PageHeader 
          page="print"
          pagebg="http://printis.cdn3.cafe24.com/print/pageheader.jpg"
          pageText="인쇄장비"
          title="PRINTIS 인쇄장비"
        />
        <section id="printConts">
          <div id="printNavs" className="tabNavWrapper">
            <MDBContainer>
              <ul id="printNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/print"}>인쇄장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/label"}>라벨장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/engraving"}>제판설비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/Print/prints/dry"}>건조장비</NavLink>
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