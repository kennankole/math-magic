/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const MyCalculator = () => {
  const [operation, setOperation] = useState(null);
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);

  const dataObj = { total, operation, next };

  const handleChange = (event) => {
    const buttonName = event.target.innerHTML;
    const results = calculate(dataObj, buttonName);
    const { total, operation, next } = results;
    setOperation(operation);
    setNext(next);
    setTotal(total);
  };

  return (
    <>
      <h1 className="home-text">Let us do some maths</h1>
      <section className="calculatorSection">
        <div className="container">
          <table>
            <thead>
              <tr>
                <td
                  colSpan="4"
                  className="inputs"
                  onClick={handleChange}
                  role="presentation"
                >
                  {total}
                  {operation}
                  {next}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td onClick={handleChange} role="presentation">AC</td>
                <td onClick={handleChange} role="presentation">+</td>
                <td onClick={handleChange} role="presentation">%</td>
                <td className="orange">÷</td>
              </tr>
              <tr>
                <td onClick={handleChange} role="presentation">7</td>
                <td onClick={handleChange} role="presentation">8</td>
                <td onClick={handleChange} role="presentation">9</td>
                <td className="orange" onClick={handleChange} role="presentation">x</td>
              </tr>
              <tr>
                <td onClick={handleChange} role="presentation">4</td>
                <td onClick={handleChange} role="presentation">5</td>
                <td onClick={handleChange} role="presentation">6</td>
                <td onClick={handleChange} role="presentation" className="orange">-</td>
              </tr>
              <tr>
                <td onClick={handleChange} role="presentation">1</td>
                <td onClick={handleChange} role="presentation">2</td>
                <td onClick={handleChange} role="presentation">3</td>
                <td onClick={handleChange} role="presentation" className="orange">+</td>
              </tr>
              <tr className="last">
                <td onClick={handleChange} role="presentation" colSpan="2">0</td>
                <td onClick={handleChange} role="presentation">.</td>
                <td className="orange" onClick={handleChange} role="none">=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default MyCalculator;
