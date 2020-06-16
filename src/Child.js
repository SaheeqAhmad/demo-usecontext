import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
    let value = useContext(ValueContext);
    return (
        <div>
            Child
            This is the Number {value}
        </div>
    );
}

export default Child;
