import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('no score for empty string', () => {
  expect(Results(''))
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
  expect(Results('pudding'))
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
  expect(Results('!@#$%').score).to.be.equal(1)
})

it('upper lower case numbers > 8', () => {
  expect(Results('cakePudd1ng'))
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
  expect(Results('cakePudd1ng!'))
    .to.deep.equal({ 
      score: 5,
      hasSpecialChar: true, 
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      isOver8Char: true
    })
}) 
