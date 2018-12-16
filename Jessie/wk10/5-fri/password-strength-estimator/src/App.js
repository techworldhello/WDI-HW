import React, { Component } from 'react';
import ReceivePassword from './ReceivePassword';
import Results from './Results';


class App extends Component {
  constructor() {
    super()
    this.state = {
      score: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(score) {
    this.setState({score});
  }

  render() {
    return (
      <div className="App">
        <ReceivePassword className="input" onChange={ this.onChange } />
        <Results score={ this.state.score } />
      </div>
    );
  }
}

export default App;
