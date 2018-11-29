import React, { Component } from 'react';
import './App.css';
import ReceivePassword from './ReceivePassword';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(result) {
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <ReceivePassword onChange={ this.onChange } score={result.score} />
        <Results score={ result } />
      </div>
    );
  }
}

export default App;
