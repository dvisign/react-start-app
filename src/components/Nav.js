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
              <NavLink to={"/printis/"}>
                <img src={Logo} alt="printis 로고"/>
              </NavLink>
            </div>
            <ul id="navList">
              <li>
                <NavLink to={"/printis/About"}>회사소개</NavLink>
              </li>
              <li>
                <NavLink to={"/printis/Print/print"}>인쇄장비</NavLink>
              </li>
              <li>
                <NavLink to={"/printis/Automation"}>자동화장비</NavLink>
              </li>
              <li>
                <NavLink to={"/printis/News"}>News</NavLink>
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