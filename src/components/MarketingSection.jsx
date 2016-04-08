import React from 'react';
import Column4 from './Column4.jsx';

class MarketingSection extends React.Component {

  render(){
    return (
      <div className="container">
        <div className="row">
          <Column4 />
          <Column4 />
          <Column4 />
        </div>
      </div>

    );
  }

}

export default MarketingSection
