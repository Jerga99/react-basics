
import React from 'react';

const AppView = ({title, counter, magicalNum, testFunction}) => {

  return (
    <div>
      <h1>{title}: {counter}</h1>
      <p>{magicalNum}</p>
      <button onClick={testFunction}>Test</button>
    </div>
  )
}


export default AppView;
