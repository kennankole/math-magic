import React from 'react';
import './App.css';
import MyCalculator from './component/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <MyCalculator />
      </div>
    );
  }
}

export default App;
