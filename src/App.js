import React, { Component } from 'react';
import logo from './logo.svg';
import piggy from './piggy.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={piggy} className="piggy-logo" alt="piggy" />

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Dinkum Coin</h1>
        </header>
        <p className="App-intro">
          To get started, select your wallet below
        </p>
      <div>
      <select>
      <option value="" selected disabled hidden>Choose your wallet here...</option>
        <option value="stu">Stu</option>
        <option value="indie">Indie</option>
      </select>

      </div>
      <br/> 
      <hr/>
      <div>
      <label>Welcome [blah] </label>
      </div>
      <br/>

      <div>
        <label>Your coin balance is </label>
        <label>50 </label>
      </div>
      <br/>
      <div>
      <button>mine a coin?</button>
      </div>
      </div>
    );
  }
}

export default App;
