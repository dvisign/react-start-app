import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import jQuery from 'jquery';
class Nav extends Component {
  render() {
    const activeStyle = {
      color: '#ff2f92'
    };
    return (
      <div id="mainNavs">
        <div id="fixNavs">
          <ul className="m_menu">
            <li>
              <NavLink activeStyle={activeStyle} to={process.env.PUBLIC_URL+"/Main"}>Main</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to={process.env.PUBLIC_URL+"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to={process.env.PUBLIC_URL+"/Print"}>Print</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to={process.env.PUBLIC_URL+"/Automation"}>Automation</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to={process.env.PUBLIC_URL+"/News"}>News</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;