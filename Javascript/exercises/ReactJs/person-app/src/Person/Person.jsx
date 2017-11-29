import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div>
        <p> I'm {props.name}! and I am {props.age} years old! </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
        </div>
// return <p> I'm {props.name}! and I am {Math.floor(Math.random() *30)} years old! </p>

)
};

export default person;