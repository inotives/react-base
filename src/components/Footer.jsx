import React from 'react';
import FooterTag from './FooterTag.jsx';

class Footer extends React.Component {
  render(){
    return (

      <section id="footer">
          <div className="footer_top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3 col-sm-6 col-xs-12">
                          <h3 className="menu_head">Main Menu</h3>
                          <div className="footer_menu">
                              <ul>
                                  <li><a href="#about">Home</a></li>
                                  <li><a href="#service">About</a></li>
                                  <li><a href="#portfolio">Projects</a></li>
                                  <li><a href="#blog">Blog</a></li>
                                  <li><a href="#contact">Contact</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12">
                          <h3 className="menu_head">Useful Links</h3>
                          <div className="footer_menu">
                              <ul>
                                  <li><a href="#">Terms of use</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Frequently Asked Questions</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12">
                          <h3 className="menu_head">Contact us</h3>
                          <div className="footer_menu_contact">
                              <ul>
                                  <li> <i className="fa fa-home"></i>
                                      <span> Some Street Road, 123-112</span></li>
                                  <li><i className="fa fa-globe"></i>
                                      <span> +98-1102-1111</span></li>
                                  <li><i className="fa fa-phone"></i>
                                      <span> contact@inotives.com</span></li>
                                  <li><i className="fa fa-map-marker"></i>
                                  <span> www.inotives.com</span></li>
                              </ul>
                          </div>
                      </div>
                      <FooterTag />
                  </div>
              </div>
          </div>

          <div className="footer_b">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="footer_bottom">
                              <p className="text-block"> &copy; Copyright reserved to <span>inoTives </span></p>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="footer_mid pull-right">
                              <ul className="social-contact list-inline">
                                  <li> <a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li> <a href="#"><i className="fa fa-rss"></i></a></li>
                                  <li> <a href="#"><i className="fa fa-google-plus"></i> </a></li>
                                  <li><a href="#"> <i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"> <i className="fa fa-pinterest"></i></a></li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>

    );
  }
}

export default Footer;
