import React, { Component } from 'react';
import './App.css';
import Tile from './Tile.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      languages: [
        {"name": "ruby","year": 1995},
        {"name": "js","year": 1995},
        {"name": "php","year": 1995},
        {"name": "java","year": 1995},
        {"name": "scala","year": 2004},
        {"name": "elixir","year": 2011},
        {"name": "crystal","year": 2014},
        {"name": "haskell","year": 1990},
        {"name": "C#","year": 2000},
        {"name": "Go","year": 2009},
        {"name": "C++","year": 1985},
        {"name": "python","year": 1990}
      ],
      selected: []
    }
  }

  toggleColor = (ln) => {
    if (this.state.languages.includes(ln)) {
      this.state.languages.delete(ln)
    } else this.setState({
      selected: [ln, ...this.state.selected]
    })
  }

  render() {
    const { languages, selected } = this.state;
    return (
      <div className="container">
        {languages.map((language, index) => 
        <Tile key={index} 
          {...language}
          selected={selected.includes(language.name)}
          index={language.name} 
          // onClick={this.toggleColor(index)}
        />)}
      </div>
    );
  }
}

export default App;
