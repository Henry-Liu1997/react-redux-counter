import React from 'react';
import { connect } from 'react-redux';

import { increase, decrease, reset, modalOpen } from './action';

function Counter({ count, name, increase, decrease, reset, modalOpen }) {
  return (
    <main className="counter">
      <h1 className="counter__title">counter</h1>
      <h2 className="counter__name">{name}</h2>
      <p className="counter__number">{count}</p>
      <div className="buttons">
        <button className="btn counter__button" onClick={increase}>
          increase
        </button>
        <button
          className="btn counter__button"
          onClick={() => {
            reset();
            modalOpen('henry', 'you reset the count to 0');
          }}
        >
          reset
        </button>
        <button className="btn counter__button" onClick={decrease}>
          decrease
        </button>
      </div>
    </main>
  );
}

const mapStateToProps = ({ countState }) => {
  return {
    count: countState.count,
    name: countState.name,
  };
};

const mapDispatchToProps = {
  increase,
  decrease,
  reset,
  modalOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
