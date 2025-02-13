import React from 'react';
import Display from './Display';
import Keys from './Keys';

const Calculator = () => {
    return (
        <div className = 'calculator'>
            <Display />
            <Keys />
        </div>
    )
}

export default Calculator;