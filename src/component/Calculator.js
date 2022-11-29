import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MyCalculator extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <table>
            <thead>
              <tr>
                <td colSpan="4" className="inputs">0</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AC</td>
                <td>+</td>
                <td>%</td>
                <td className="orange">÷</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td className="orange">x</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td className="orange">-</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td className="orange">+</td>
              </tr>
              <tr className="last">
                <td colSpan="2">0</td>
                <td>.</td>
                <td className="orange">=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default MyCalculator;
