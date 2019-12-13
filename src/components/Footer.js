import React, { Component } from 'react'
import {MDBContainer} from 'mdbreact'
import { NavLink } from 'react-router-dom';
import FooterLogo from 'img/public/FooterLogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footers">
        <MDBContainer>
          <div className="footerHead">
            <NavLink to="/printis/">
              <img src={FooterLogo} alt="프린티스" />
            </NavLink>
            <span>Printis is creative technology</span>
          </div>
          <div className="footerBody">
            <div className="copys">
              <p>© <span>PRINTIS</span> 2019</p>
            </div>
            <div className="infos">
              <p>
                <span className="infoCate">CEO.</span><span>Jun, Byung Moon</span>
                <span className="infoCate">Tel.</span><span>032.812.6272</span>
                <span className="infoCate">Email.</span><span>printis001@hanmail.net</span>
              </p>
              <p>2 Dong,10 Namdongdong-ro 33beon-gil, Namdong-gu, Incheon, Republick of Korea</p>
            </div>
          </div>
        </MDBContainer>
      </div>
    )
  }
}

export default Footer;