import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './css/Pokemon.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      pokemons:[],
    }
  }

  componentDidMount(){

    fetch('http://localhost:4242/')
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data },() => console.log(data)));
  }

  onchange = e =>{
    this.setState({ search : e.target.value })
  }
  render() {
    const {search} = this.state;
    const {pokemons} = this.state;

const name = pokemons.filter(item => {return (item.name.toLowerCase())})

    if (search !== "" && name.indexOf(search) === -1 ) {
      return null;
    }
    return (
      <div >
        <input type="text" className="search" id= "name" placeholder="search" onChange={this.onchange}/>
    </div>
  );
}
}

export default Search;
