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
    this.setState({ score });
  }

  changeBackgroundColor(score) {
    if (score === 4) {
      return 'high-score';
    } else if (score > 4) {
      return 'highest-score';
    }
  }

  render() {
    const { score } = this.state.score;
    console.log(score)
    return (
      <div className="App">
        <ReceivePassword onChange={ this.onChange } className={this.changeBackgroundColor(score)}/>
        <Results score={ this.state.score } />
      </div>
    );
  }
}

export default App;
