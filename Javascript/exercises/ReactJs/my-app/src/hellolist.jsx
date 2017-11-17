import React, { Component } from 'react';

class HelloList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            date: new Date(),
            people:['Ahmer', 'Ashar', 'Daniel', 'Azael']
        }
    }
    render (){
        return <ul>
            {this.state.people.map((person) =>
            <li>{person}</li>
            )}
        </ul>
    }
}