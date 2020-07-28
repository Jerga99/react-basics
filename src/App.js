

import React, { useState } from 'react';


// function App() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h2>Hey Guys</h2>
//     </div>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0); // return arrays with 2 values, 1. state 2. function to mutate the state
  const [title, setTitle] = useState("My Counter Application");

  const increment = num => () => {
    setCounter(counter + num);
  }

  return (
    <div className="container">
      <h1>{title}: {counter}</h1>
      {/* provide here function expression which will be executed when clicking
      on button */}
      <button onClick={increment(1)}>Increment</button>
      <button onClick={increment(-1)}>Decrement</button>
    </div>
  )
}

// class App extends React.Component {

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     counter: 0
//   //   }
//   // }

//   state = {
//     counter: 0
//   }

//   increment = num => () => {
//     this.setState({
//       counter: this.state.counter + num
//     })
//   }

//   // increment = (num) => {
//   //   return () => {
//   //     this.setState({
//   //       counter: this.state.counter + num
//   //     })
//   //   }
//   // }

//   // function declaration -> function hello(){}
//   // function expression -> const hello = () => {}

//   render() {
//     return (
//       <div className="container">
        // <h1>Counter Application: {this.state.counter}</h1>
        // {/* provide here function expression which will be executed when clicking
        // on button */}
        // <button onClick={this.increment(1)}>Increment</button>
        // <button onClick={this.increment(-1)}>Decrement</button>
//       </div>
//     )
//   }
// }

export default App;
