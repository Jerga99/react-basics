
import React from 'react';

// HOC is function that takes a Component and returns new component
// Newly returned component renders original component and provides to it additional
// functionality

// const withAlert = (Component) => {
//   return () => {

//   }
// }


const withAlert = Component => props => {

  const myCustomProp = 10;
  const myCustomFunction = () => window.alert('Hello World')

  return (
    <Component
      myCustomProp={myCustomProp}
      myCustomFunction={myCustomFunction}
      {...props}
    />
  )
}

export default withAlert;
