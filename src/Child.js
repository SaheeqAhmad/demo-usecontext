import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
    let value = useContext(ValueContext);
    console.log("This", value);
    let updateValue = value[1] /////This is a Fucntion
    return (
        <div>
            Child
            This is the Number {value[0]}
            <button onClick={() => { updateValue(++value[0]) }}>Update Value</button>
        </div>
    );
}

export default Child;
