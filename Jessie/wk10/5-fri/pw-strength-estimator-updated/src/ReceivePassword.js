import React from 'react';
import Results from './Results';
import getScore from './lib/getScore';
import './ReceivePassword.css';

export default class ReceivePassword extends React.Component {
  constructor() {
    super();
    this.processPassword = this.processPassword.bind(this);
    this.state = {
      showPassword: true
    }
  }

  processPassword(event) {
    const score = getScore(event.target.value);
    //console.log(event.target.value)
    this.setState({ score });

    if (this.props.onChange) this.props.onChange(score);
  }

  toggleShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  changeBackgroundColor(score) {
    if (score === 4) {
      return 'high-score';
    } else if (score > 4) {
      return 'highest-score';
    }
  }

  render() {

    return (
      <div className={this.changeBackgroundColor(this.props.score)}>
        <h3>Test the strength of your password</h3>
        <input  
          className="input"
          type={ this.state.showPassword ? 'password' : 'text' }
          onKeyUp={ this.processPassword } 
          placeholder='Be original' />
        <input type="checkbox" onChange={ this.toggleShowPassword.bind(this) } />
      </div>
    )
  }
}