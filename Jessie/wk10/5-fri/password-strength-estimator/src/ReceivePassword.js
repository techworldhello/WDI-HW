import React from 'react';
import Results from './Results';
import getScore from './lib/getScore';
import testCommons from './lib/testCommons';

export default class ReceivePassword extends React.Component {
  constructor() {
    super();
    this.processPassword = this.processPassword.bind(this);
    
    this.state = {
      score: {
        score: 0,
        hasLowerCase: false, 
        hasUpperCase: false,
        hasNumber: false,
        isOver8Char: false,
        hasSpecialChar: false,
      },
      showPassword: true
    }
  }

  processPassword(event) {
    testCommons(event.target.value);
    const score = getScore(event.target.value);
    console.log(event.target.value)
    this.setState({score});

    if (this.props.onChange) this.props.onChange(score);
  }

  toggleShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {

    return (
      <div>
        <h3>Test the strength of your password</h3>
        <input  
          type={this.state.showPassword ? 'password' : 'text'}
          onKeyUp={ this.processPassword } 
          placeholder='Be original'/>
        <input type="checkbox" onChange={this.toggleShowPassword.bind(this)} />
        <Results conditions={ this.state.score }/>
      </div>
    )
  }
}