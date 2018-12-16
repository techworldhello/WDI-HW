import React from 'react';
import Estimator from './Estimator';

export default class ReceivePassword extends React.Component {
  constructor(prop) {
    super(prop);
    this.processPassword = this.processPassword.bind(this);
    
    this.state = {
      score: 0,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      isOver8Char: false,
      hasSpecialChar: false
    }
  }


  processPassword(event) {
    console.log(event.target.value)
    this.setState = ({
      password: event.target.value
    })
  }

  render() {

    return (
      <div>
        <h3>Test the strength of your password, if you dare</h3>
        <textarea onKeyUp={ this.processPassword }></textarea>
        <Estimator conditions={ this.state }/>
      </div>
    )
  }
}