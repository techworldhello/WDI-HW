import React, { Component } from 'react';
import './App.css';
import ReceivePassword from './ReceivePassword';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(score) {
    if (score.score > 4) {
      return 'high-score' //create css elem!!
    }
    this.setState({score});
  }

  render() {
    return (
      <div className="App">
        <ReceivePassword onChange={ this.onChange } />
        <Results score={ this.state.score } />
      </div>
    );
  }
}

export default App;
