import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MDBContainer} from 'mdbreact';
import jQuery from 'jquery';
class Nav extends Component {
  state = {
    navActive : false
  }
  navEvent = () => {
    const btns = jQuery("#mNavBtnWrapper > button");
    const subNav = jQuery("#mobileNav");
    const active = btns.hasClass("mNavActive"); 
    if (active === false) {
      btns.addClass("mNavActive");
      subNav.stop().slideDown();
    } else {
      btns.removeClass("mNavActive");
      subNav.stop().slideUp();
    }
  }
  componentDidUpdate() {
    const btns = jQuery("#mNavBtnWrapper > button");
    const subNav = jQuery("#mobileNav");
    btns.removeClass("mNavActive");
    subNav.stop().slideUp();
  }
  render() {
    return (
      <div id="navWrapper">
        <div id="mainNavs">
          <MDBContainer>
            <div className="clear">
              <div id="logos">
                <Link to={"/"}>
                  <img src="http://printis.cdn3.cafe24.com/public/NavLogo.png" alt="printis 로고"/>
                </Link>
              </div>
              <ul id="navList" className="navLists">
                <li>
                  <Link to={"/About"}>회사소개</Link>
                </li>
                <li>
                  <Link to={"/Print/prints/print"}>인쇄장비</Link>
                </li>
                <li>
                  <Link to={"/Automation/autos/touch"}>자동화장비</Link>
                </li>
                <li>
                  <Link to={"/News/news/1"}>News</Link>
                </li>
              </ul>
              <div id="mNavBtnWrapper">
                <button onClick={this.navEvent}>
                  <span id="btnLine1" className="mBtnLines" />
                  <span id="btnLine2" className="mBtnLines" />
                  <span id="btnLine3" className="mBtnLines" />
                </button>
              </div>
            </div>
          </MDBContainer>
            <MobileNav />
        </div>
      </div>
    )
  }
}
class MobileNav extends Component {
  render() {
    return (
      <aside id="mobileNavs">
        <div id="mobileNav">
          <MDBContainer>
            <ul id="mNavList" className="navLists">
              <li>
                <Link to={"/About"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/Print/prints/print"}>인쇄장비</Link>
              </li>
              <li>
                <Link to={"/Automation/autos/touch"}>자동화장비</Link>
              </li>
              <li>
                <Link to={"/News/news/1"}>News</Link>
              </li>
            </ul>
          </MDBContainer>
        </div>
      </aside>
    )
  }
}
// process.env.PUBLIC_URL
export default Nav;