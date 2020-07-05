import React from 'react';
import { connect } from 'react-redux';

import { CounterAction } from './action';

function Counter({ count, name, increase, decrease, reset }) {
  return (
    <main className="counter">
      <h1 className="counter__title">counter</h1>
      <h2 className="counter__name">{name}</h2>
      <p className="counter__number">{count}</p>
      <div className="buttons">
        <button className="counter__button" onClick={increase}>
          increase
        </button>
        <button className="counter__button" onClick={reset}>
          reset
        </button>
        <button className="counter__button" onClick={decrease}>
          decrease
        </button>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    name: state.name,
  };
};

export default connect(mapStateToProps, CounterAction)(Counter);
