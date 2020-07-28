import React from 'react';

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h2>Hey Guys</h2>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h2>Hey Guys</h2>
//     </div>
//   )
// }

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     counter: 0
  //   }
  // }

  state = {
    counter: 0
  }

  increment = num => () => {
    this.setState({
      counter: this.state.counter + num
    })
  }

  // increment = (num) => {
  //   return () => {
  //     this.setState({
  //       counter: this.state.counter + num
  //     })
  //   }
  // }

  // function declaration -> function hello(){}
  // function expression -> const hello = () => {}

  render() {
    return (
      <div className="container">
        <h1>Counter Application: {this.state.counter}</h1>
        {/* provide here function expression which will be executed when clicking
        on button */}
        <button onClick={this.increment(1)}>Increment</button>
        <button onClick={this.increment(-1)}>Decrement</button>
      </div>
    )
  }
}

export default App;
