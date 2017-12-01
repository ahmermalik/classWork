import React from 'react';
// import './Person.css';


const userOutput = (props) => {
    return (
        <div className="Person">
            <p> Username: {props.Username} </p>
            <p> More Random Text !</p>
        </div>
//{props.name} will put pass the actual name through to the input box.
//{props.changed} will show the new changed name dynamically.
// return <p> I'm {props.name}! and I am {Math.floor(Math.random() *30)} years old! </p>

    )
};

export default userOutput;