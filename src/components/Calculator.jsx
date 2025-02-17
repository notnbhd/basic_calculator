import React from 'react';
import Display from './Display';
import Keys from './Keys';

const Calculator = () => {

    const [expression, setExpression] = React.useState('');
    const [displayEXP, setDisplayEXP] = React.useState('');
    const [result, setResult] = React.useState('0');
 
    function handleButton(value) {
        console.log(value);

        if (value === "AC")
        {
            setExpression('');
            setDisplayEXP('');
            setResult('0');
        }
        else if (value === 'DEL')
        {
            setDisplayEXP(displayEXP.slice(0, -1));
            setExpression(expression.slice(0, -1));
        }
        else{
            setDisplayEXP(displayEXP + value);
            setExpression(expression + value);
        }
    }

    return (
        <div className = 'calculator'>
            <Display expression={displayEXP} result={result}/>
            <Keys handleButton={handleButton}/>
        </div>
    );
};

export default Calculator;