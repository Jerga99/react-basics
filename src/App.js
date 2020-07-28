

import React, { useState, useEffect } from 'react';
import AppView from './AppView';

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h2>Hey Guys</h2>
//     </div>
//   )
// }

const App = (props) => {
  const [counter, setCounter] = useState(0);

  // Executed initialy and every time component will update
  useEffect(() => {
    console.log('calling useEffect!');
    setCounter(100);
  }, [])

  useEffect(() => {
    console.log('calling my other useEffect!');
  }, [counter])

  const increment = num => () => {
    setCounter(counter + num);
  }

  const testFunction = () => {
    alert('executinf function!');
  }

  return (
    <div className="container">
      <AppView
        {...props}
        testFunction={testFunction}
        counter={counter}
      />
      <button onClick={increment(1)}>Increment</button>
      <button onClick={increment(-1)}>Decrement</button>
    </div>
  )
}

// class App extends React.Component {

//   constructor() {
//     super();
//     console.log('calling constructor')
//     this.state = {
//       counter: 0
//     }
//   }

//   // Called only once after render
//   componentDidMount() {
//     this.setState({counter: 100});
//     console.log('calling componentDidMount')
//   }

//   // state = {
//   //   counter: 0
//   // }

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

//   // Lifecycle function, it's called after constructor and every time your componen is updated
//   render() {
//     console.log('calling render')
//     const { title, magicalNum } = this.props;
//     const { counter } = this.state;
//     return (
//       <div className="container">
//         <h1>{title}: {counter}</h1>
//         <p>{magicalNum}</p>
//         {/* provide here function expression which will be executed when clicking
//         on button */}
//         <button onClick={this.increment(1)}>Increment</button>
//         <button onClick={this.increment(-1)}>Decrement</button>
//       </div>
//     )
//   }
// }

export default App;
