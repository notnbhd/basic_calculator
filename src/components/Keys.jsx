import React from 'react';

const Keys = () => {
    const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];
    const numKeys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
    const opKeys = ["+", "-", "*", "/", "(", ")", "C", "AC", "%"];
    
    return <div className = 'keys'>
        <div className='sci-keys'>
            {sciKeys.map((item, index) => (
                <button key={index}> {item}</button>
            ))}
        </div>
        <div className="line"></div>
        <div className='num-keys'>
            {numKeys.map((item, index) => (
                <button key={index}> {item}</button>
            ))}
        </div>
        <div className="line"></div>
        <div className='op-keys'>
            {opKeys.map((item, index) => (
                <button key={index}> {item}</button>
            ))}
        </div>
    </div>;
}

export default Keys;