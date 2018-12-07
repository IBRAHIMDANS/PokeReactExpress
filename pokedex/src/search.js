import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Pokemon.css';

class Search extends Component {



  render() {
    return (
      <div >
        <input type="text" className="search" id= "name" placeholder="search"/>

         <button className=" btn-danger"> Validate</button>
    </div>
  );
}
}

export default Search;
