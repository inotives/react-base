import React from 'react';

class FooterTag extends React.Component {

  render (){
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
          <h3 className="menu_head">Tags</h3>
          <div className="footer_menu tags">
              <a href="#"> Design</a>,
              <a href="#"> User Interface</a>,
              <a href="#"> Graphics</a>,
              <a href="#"> Web Design</a>,
              <a href="#"> Development</a>,
              <a href="#"> Hybrid App</a>,
              <a href="#"> Bootstrap</a>
          </div>
      </div>
    );
  }

}

export default FooterTag
