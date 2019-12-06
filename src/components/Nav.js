import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import jQuery from 'jquery';
class Nav extends Component {
  render() {
    return (
      <div id="mainNavs">
        <div id="fixNavs">
          <ul className="m_menu">
            <li>
              <NavLink to={"/printice/"}>Main</NavLink>
            </li>
            <li>
              <NavLink to={"/printice/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/printice/Print/print"}>Print</NavLink>
            </li>
            <li>
              <NavLink to={"/printice/Automation"}>Automation</NavLink>
            </li>
            <li>
              <NavLink to={"/printice/News"}>News</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
// process.env.PUBLIC_URL
export default Nav;