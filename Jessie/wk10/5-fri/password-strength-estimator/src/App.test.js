import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import estimateStrength from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('password', () => {
  it('no score for empty string', () => {
    expect(estimateStrength(''))
      .to.deep.equal({ 
        score: 0, 
        hasSpecialChar: false,       
        hasLowerCase: false, 
        hasUpperCase: false,
        hasNumber: false,
        isOver8Char: false
      })
  })  
  
  it('lower case', () => {
    expect(estimateStrength('pudding'))
      .to.deep.equal({ 
        score: 1, 
        hasSpecialChar: false,       
        hasLowerCase: true, 
        hasUpperCase: false,
        hasNumber: false,
        isOver8Char: false
      })
  })

  it('1 pt for special characters', () => {
    expect(estimateStrength('!@#$%').score).to.be.equal(1)
  })
  
  it('upper lower case numbers > 8', () => {
    expect(estimateStrength('cakePudd1ng'))
      .to.deep.equal({ 
        score: 4, 
        hasSpecialChar: false,       
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  })

  it('super strong', () => {
    expect(estimateStrength('cakePudd1ng!'))
      .to.deep.equal({ 
        score: 5,
        hasSpecialChar: true, 
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  }) 
  
})

