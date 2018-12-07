import React, { Component } from 'react';
import Headerlogo from './img/Header.jpg'
class Header extends Component {



  render() {
    return (
      <div className="container">
        <div className="justify-content-center">
          <img src={Headerlogo} className="col-sm-8" alt="Header"/>
        </div>
    </div>
  );
}
}

export default Header;
