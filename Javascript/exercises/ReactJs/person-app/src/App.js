import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
        {name: 'JP', age: 26 },
        {name: 'Azael', age: 26},
        {name: 'Carolina', age: 25}
    ]
  }

  switchNameHandler = () => {
    console.log('You clicked a button!');
}


  render() {
    return (
      <div className = "App">
          <h1> Hi, this is a react app </h1>
          <p> This is really working! </p>
          <button onClick={this.switchNameHandler}>Switch Name </button>
          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}></Person>
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}></Person>
          <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}></Person>
          <Person name = "Ahmer" age = "28"> My Hobbies: Studying, Learning, Coding, and Trading </Person>
          <Person name = "Ashar" age = "25"> My Hobbies: Startup, Reading, Learning, and Trading </Person>
          <Person name = "Samira" age = "58"> My Hobbies: Cooking, Laughing, Gardening, and Reading </Person>
      </div>
    );
  }
}
//state is a special property that allows you to pass in data from an array into a component.
//hobbies are known as children of the component

export default App;
