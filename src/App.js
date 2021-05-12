import React, { Component } from 'react';
import { useState } from "react";
import './App.css';

// class App extends Component {
//   constructor () {
//     super();
//     this.state= {
//       value: ''
//     }

//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   render() {
//     return (
//       <div>
//         <h1>Un repetidor</h1>
//         <input type="text" placeholder="Empieza a escribir algo" value={this.state.value} onChange={this.handleChange} />
//         <p className="repeater">{this.state.value}</p>
//       </div>
//     );
//   }
// }

const App = () => {
  const [value, setValue] = useState('')

  function handleChange(event) {
    const {value} = event.target;
    setValue(value)
  }

  return(
    <div>
      <h1>Un repetidor</h1>
      <input type="text" placeholder="Empieza a escribir algo" value={value} onChange={handleChange} />
      <p className="repeater">{value}</p>
    </div>
  )
}

export default App;
