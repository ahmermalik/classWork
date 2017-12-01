import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';



class App extends Component {
    state = {
        username : 'Ahmer Malik'
    }

    usernameChangedHandler =  (event) => {
        this.setState({username: event.target.value});
    }
    render() {
    return(
        <div>
        <UserInput changed={this.usernameChangedHandler} />
        <UserOutput Username="Ahmer" / >
        < UserOutput Username={this.state.username} / >
        < UserOutput Username={this.state.username} / >
        </div>
);
    }
}

export default App;
