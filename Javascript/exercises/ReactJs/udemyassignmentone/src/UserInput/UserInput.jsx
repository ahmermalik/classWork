import React from 'react';
// you have to import React from react in any component you create.


const userInput = (props) => {
    return (
        <div className="Person">

            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
//{props.name} will put pass the actual name through to the input box.
//{props.changed} will show the new changed name dynamically.
// return <p> I'm {props.name}! and I am {Math.floor(Math.random() *30)} years old! </p>

    )
};

export default userInput;