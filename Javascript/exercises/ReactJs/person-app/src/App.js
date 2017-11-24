import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className = "App">
          <h1> Hi, this is a react app </h1>
          <p> This is really working! </p>
          <Person name = "Ahmer" age = "28"> My Hobbies: Studying, Learning, Coding, and Trading </Person>
          <Person name = "Ashar" age = "25"> My Hobbies: Startup, Reading, Learning, and Trading </Person>
          <Person name = "Samira" age = "58"> My Hobbies: Cooking, Laughing, Gardening, and Reading </Person>
      </div>
    );
  }
}

export default App;
