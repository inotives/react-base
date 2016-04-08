import React from 'react';

class Jumbotron extends React.Component {

  render (){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
