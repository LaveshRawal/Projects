'use client'
import React, { useState } from 'react';
import styles from './page.module.css'

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value: string) => {
    setDisplayValue(prevDisplayValue => prevDisplayValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate} className={styles.equalButton}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <button onClick={handleClear} className={styles.clearButton}>Clear</button>
    </div>
  );
};

export default Calculator;