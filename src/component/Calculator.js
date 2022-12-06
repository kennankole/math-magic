import React from 'react';
import calculate from '../logic/calculate';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const buttonName = event.target.innerHTML;
    const results = calculate(this.state, buttonName);
    this.setState(results);
  };

  render() {
    const { total, operation, next } = this.state;
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
                    onClick={this.handleChange}
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
                  <td onClick={this.handleChange} role="presentation">AC</td>
                  <td onClick={this.handleChange} role="presentation">+</td>
                  <td onClick={this.handleChange} role="presentation">%</td>
                  <td className="orange" onClick={this.handleChange} role="presentation">÷</td>
                </tr>
                <tr>
                  <td onClick={this.handleChange} role="presentation">7</td>
                  <td onClick={this.handleChange} role="presentation">8</td>
                  <td onClick={this.handleChange} role="presentation">9</td>
                  <td className="orange" onClick={this.handleChange} role="presentation">x</td>
                </tr>
                <tr>
                  <td onClick={this.handleChange} role="presentation">4</td>
                  <td onClick={this.handleChange} role="presentation">5</td>
                  <td onClick={this.handleChange} role="presentation">6</td>
                  <td onClick={this.handleChange} role="presentation" className="orange">-</td>
                </tr>
                <tr>
                  <td onClick={this.handleChange} role="presentation">1</td>
                  <td onClick={this.handleChange} role="presentation">2</td>
                  <td onClick={this.handleChange} role="presentation">3</td>
                  <td onClick={this.handleChange} role="presentation" className="orange">+</td>
                </tr>
                <tr className="last">
                  <td onClick={this.handleChange} role="presentation" colSpan="2">0</td>
                  <td onClick={this.handleChange} role="presentation">.</td>
                  <td className="orange" onClick={this.handleChange} role="none">=</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}
export default MyCalculator;
