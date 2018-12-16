import React from 'react';

export default function Estimator(conditions) {
  // destructure this.state and check if each of the conditions have been fulfilled in Estimator function
  const {
    score,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    isOver8Char,
    hasSpecialChar,
  } = conditions;

  //if score > 4 turn div green
  // safePassword();
  
  return (
    <div>
      <p>{conditions}</p>
    </div>
  )
}