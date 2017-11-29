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
    ],
      otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('You clicked a button!');

    this.setState ( {
        persons: [
            {name: newName, age: 28 },          //this will change name to full name on button click.
            {name: 'Azael Vega', age: 29},
            {name: 'Carolina Fernandez', age: 26 }
        ]
    })
  }

  nameChangedHandler = (event) => {
      this.setState( {
          persons: [
              {name: event.target.value, age: 28 },          //this will change name to full name on button click.
              {name: 'Azael Vega', age: 29},
              {name: 'Carolina Fernandez', age: 26 }

       ]
      })
}

  render() {
      const style= {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1x solid grey',
        padding: '8px',
        cursor: 'pointer'


      };

    return (
      <div className = "App">
          <h1> Welcome to the Person App </h1>
          <p> This is really working! </p>
          <button
            style={style}
            onClick={() => this.switchNameHandler('Juan Pablo')}>Switch Name </button>
          <Person
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age}
            Click={this.switchNameHandler.bind(this, 'Juan Pablo Valesquez')}
            changed={this.nameChangedHandler}></Person>
          <Person
            name = {this.state.persons[1].name}
            age = {this.state.persons[1].age}
             ></Person>
          <Person
            name = {this.state.persons[2].name}
            age = {this.state.persons[2].age}
            ></Person>

          <Person
            name = "Ahmer"
            age = "28"> My Hobbies: Studying, Learning, Coding, and Trading </Person>
          <Person
            name = "Ashar"
            age = "25"> My Hobbies: Startup, Reading, Learning, and Trading </Person>
          <Person
            name = "Samira"
            age = "50"> My Hobbies: Cooking, Laughing, Gardening, and Reading </Person>
      </div>
    );
  }
}
//state is a special property that allows you to pass in data from an array into a component.
//hobbies are known as children of the component

export default App;
