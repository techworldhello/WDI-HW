import React from 'react';

const Results = (result) => (
  <div>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
)
  
export default Results;