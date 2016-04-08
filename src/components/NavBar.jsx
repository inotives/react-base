import React from 'react';

import logoImg from '../assets/img/logo.png'; //logo image

const logoStyle = { width: '100%', height: '100%' }
const logoContainer = { width: 40, height: 46 }
const navbarBrandStyle={ padding: '5px' }
const test={float: 'right', lineHeight: 1.9, marginLeft: 10, marginRight: 10, color: '#fff'}
const navBarStyle = { backgroundColor: '#DD7E6B' }

class NavBar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" style={navbarBrandStyle} href="#page-top">
                    <div style={logoContainer} >
                      <img src={logoImg} style={logoStyle}/>
                    </div>
                  </a>
                  <h4 style={test}>InoTives</h4>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li className="page-scroll">
                          <a href="#portfolio">Portfolio</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#about">About</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default NavBar
