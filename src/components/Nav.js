import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={"/"}>
                <img src={Logo} alt="printis 로고"/>
              </Link>
            </div>
            <ul id="navList">
              <li>
                <Link to={"/About"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/Print/print"}>인쇄장비</Link>
              </li>
              <li>
                <Link to={"/Automation/touch"}>자동화장비</Link>
              </li>
              <li>
                <Link to={"/News"}>News</Link>
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