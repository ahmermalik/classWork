import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
            <p> I'm {props.name}! and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
//{props.name} will put pass the actual name through to the input box.
//{props.changed} will show the new changed name dynamically.
// return <p> I'm {props.name}! and I am {Math.floor(Math.random() *30)} years old! </p>

    )
};

export default person;