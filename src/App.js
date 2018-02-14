import React, { Component } from 'react';
import './App.css'
import BarChart from './components/BarChart'
class App extends Component {
  constructor() {
    super()
    this.state = {
      // store nums
      data: [1000, 300, 400, 500, 700, 300, 200, 100, 200, 50]
    }
  }
  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
