import React, { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (operatorValue) => {
    setOperator(operatorValue);
    setFirstValue(parseFloat(display));
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    if (operator && firstValue) {
      const secondValue = parseFloat(display);
      let result;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case '*':
          result = firstValue * secondValue;
          break;
        case '/':
          if (secondValue === 0) {
            result = 'Error';
          } else {
            result = firstValue / secondValue;
          }
          break;
        default:
          result = secondValue;
      }

      setDisplay(result.toString());
      setOperator(null);
      setFirstValue(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperator(null);
    setFirstValue(null);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleSignChange = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  const buttonStyle = "rounded-md text-2xl font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 active:bg-gray-300 shadow-sm h-16 w-20 flex items-center justify-center";
  const operatorButtonStyle = "rounded-md text-2xl font-medium bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 active:bg-orange-600 shadow-sm h-16 w-20 text-white flex items-center justify-center";
  const equalsButtonStyle = "rounded-md text-2xl font-medium bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 active:bg-green-600 shadow-sm h-16 w-20 text-white flex items-center justify-center";
  const clearButtonStyle = "rounded-md text-2xl font-medium bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 active:bg-red-600 shadow-sm h-16 w-20 text-white flex items-center justify-center";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80">
        <div className="bg-gray-100 rounded-md p-4 mb-4 text-right text-3xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{display}</div>
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClearClick} className={clearButtonStyle}>AC</button>
          <button onClick={handleSignChange} className={buttonStyle}>+/-</button>
          <button onClick={() => handleOperatorClick('%')} className={operatorButtonStyle}>%</button>
          <button onClick={() => handleOperatorClick('/')} className={operatorButtonStyle}>/</button>

          <button onClick={() => handleNumberClick(7)} className={buttonStyle}>7</button>
          <button onClick={() => handleNumberClick(8)} className={buttonStyle}>8</button>
          <button onClick={() => handleNumberClick(9)} className={buttonStyle}>9</button>
          <button onClick={() => handleOperatorClick('*')} className={operatorButtonStyle}>*</button>

          <button onClick={() => handleNumberClick(4)} className={buttonStyle}>4</button>
          <button onClick={() => handleNumberClick(5)} className={buttonStyle}>5</button>
          <button onClick={() => handleNumberClick(6)} className={buttonStyle}>6</button>
          <button onClick={() => handleOperatorClick('-')} className={operatorButtonStyle}>-</button>

          <button onClick={() => handleNumberClick(1)} className={buttonStyle}>1</button>
          <button onClick={() => handleNumberClick(2)} className={buttonStyle}>2</button>
          <button onClick={() => handleNumberClick(3)} className={buttonStyle}>3</button>
          <button onClick={() => handleOperatorClick('+')} className={operatorButtonStyle}>+</button>

          <button onClick={() => handleNumberClick(0)} className={`${buttonStyle} col-span-2`}>0</button>
          <button onClick={handleDecimalClick} className={buttonStyle}>.</button>
          <button onClick={handleEqualsClick} className={equalsButtonStyle}>=</button>
        </div>
      </div>
    </div>
  );
}