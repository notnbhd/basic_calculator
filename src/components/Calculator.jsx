import React from 'react';
import Display from './Display';
import Keys from './Keys';

const Calculator = () => {

    const [expression, setExpression] = React.useState('');
    const [displayEXP, setDisplayEXP] = React.useState('');
    const [result, setResult] = React.useState('0');


    const mathFunc = {
        sin : "Math.sin",
        cos : "Math.cos",
        tan : "Math.tan",
        log : "Math.log10",
        ln : "Math.log",
        "√" : "Math.sqrt",
        π : "Math.PI",
        e : "Math.E",
        "^" : "**",
    };

    function extractLastNum(exp) {
        const nums = exp.match(/\d+/g);
        return nums ? nums.pop() : null;
    }

    function factorial(n) {
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    function getResult() {
        if (expression.length !== 0) {
            try {
                let compute = eval(expression);
                setResult(compute);
            } catch (error) {
                setResult('Error');
            }
        } else {
            setResult('Error');
        }
    }
 
    function handleButton(value) {
        console.log(value);

        if (value === "AC")
        {
            setExpression('');
            setDisplayEXP('');
            setResult('0');
        }

        else if (value === '=')
        {
            getResult();
        }

        else if (mathFunc.hasOwnProperty(value)) {
            setDisplayEXP(displayEXP + value);
            setExpression(expression + mathFunc[value]);
        }

        else if (value === '!')
        {
            const lastNum = extractLastNum(expression);
            if (lastNum != null) {
                const num = parseFloat(lastNum);
                setDisplayEXP(displayEXP + value);
                setExpression(expression.replace(lastNum, factorial(num)));
            }
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