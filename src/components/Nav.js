import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Container} from 'mdbreact';
import Logo from 'img/public/NavLogo.png';
//import jQuery from 'jquery';
class Nav extends Component {
  render() {
    return (
      <div id="mainNavs">
        <Container>
          <div className="clear">
            <div id="logos">
              <NavLink to={"/printice/"}>
                <img src={Logo} alt="printice 로고"/>
              </NavLink>
            </div>
            <ul id="navList">
              <li>
                <NavLink to={"/printice/About"}>회사소개</NavLink>
              </li>
              <li>
                <NavLink to={"/printice/Print/print"}>인쇄장비</NavLink>
              </li>
              <li>
                <NavLink to={"/printice/Automation"}>자동화장비</NavLink>
              </li>
              <li>
                <NavLink to={"/printice/News"}>News</NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    )
  }
}
// process.env.PUBLIC_URL
export default Nav;