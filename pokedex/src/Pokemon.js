import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Pokemon.css';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    fetch('http://localhost:4242/pokemon/'+id)
    .then(res => res.json())
    .then(data => this.setState({ pokemon: data }));
  }

  render() {
    const { pokemon } = this.state;
    if (!pokemon) return <h1>Pas de données</h1>
    let attaques = pokemon.attaques.map((attaque, index) => (
      <ul  className="hig" key={index}>
        {Object.entries(attaque).map(([key, value, ]) => (
          <li className="" key={key}>
            <b> {key}  :</b> {value}
          </li>
        ))}
      </ul>
    ))
    return (
      <div>
        <h1 className="mt-4"> <b> {pokemon.nom}</b> </h1>
        <p></p>
        <div className="red">
          <div>
            <img className="imgOne" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.ndex}.png`} alt={`${pokemon.nom}`}></img>
          </div>
          <div className= "alert alert-dark" key={pokemon.ndex}>
            <p> <b> Pokemon N°: </b>{pokemon.ndex} </p>
            <div className="row">
            <p className="col-6" > <b>Nom (fr):  </b>{pokemon.nom} </p>
            <p className="col-6" > <b>Nom (en): </b>{pokemon.nomen} </p>
            <p className="col-6" > <b>Nom (ja): </b>{pokemon.nomja} </p>

            <p className="col-6" > <b>Famille: </b>{pokemon.espece} </p>
            <p className="col-6" > <b>Taille: </b>{pokemon.taille} m </p>
            <p className="col-6" > <b>Poids: </b>{pokemon.poids} Kg </p>
            <p className="col-6" > <b>Exp: </b>{pokemon.expval} </p>
            <p className="col-6" > <b>ExpMax: </b>{pokemon.expmax} </p>
            <p className="col-6" > <b>Sexe: </b>{ (pokemon.fmratio<0) ? "Femme"  : "Homme"} </p>
            <p className="col-6" > <b>Taux de Capture: </b>{pokemon.captureval} </p>
            <p className="col-6" > <b> Type1 : </b>{pokemon.type1} </p>
            {  (! pokemon.type2)?  <p> </p> : <p className="col-6" > <b>Type2 :</b> {pokemon.type2} </p> }
            <p className="col-6" > <b>Couleur : </b> {pokemon.couleur} </p>
          </div>
            <p> <b>Attaques :</b> <div className="row justify-content-center">{attaques} </div></p>
            <p> <b>Legende: </b>{pokemon.légende} </p>

          </div>
        </div>

        <Link to={`/`}>
        <input type="button" className ="btn btn-primary" formAction="#" value="Back"/>
      </Link>
    </div>
  );
}
}

export default Pokemon;
