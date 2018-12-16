import React from 'react';

export default function Results({result}) {
  //if score > 4 turn div green
  // safePassword();
  
  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}