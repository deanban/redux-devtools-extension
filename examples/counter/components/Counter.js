import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  const {
    increment,
    autoIncrement,
    incrementAsync,
    decrement,
    counter
  } = props;
  return (
    <p>
      Clicked: {counter} times <button onClick={increment}>+</button>{' '}
      <button onClick={decrement}>-</button>{' '}
      <button onClick={incrementAsync}>Increment async</button>{' '}
      <button onClick={autoIncrement}>Auto increment</button>
    </p>
  );
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  autoIncrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
