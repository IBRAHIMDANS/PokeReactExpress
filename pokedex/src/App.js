import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList.js'
import Pokemon from './Pokemon.js'


class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route path="/pokemon/:id" component={Pokemon} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
