import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MODAL_CLOSE } from './action';

const Modal = ({ isOpen, name, text, closeModal }) => {
  return (
    <div className={`modal__container ${isOpen && 'open'}`}>
      <div className="modal">
        <h4 className="modal__title">{name}</h4>
        <p className="modal__text">{text}</p>
        <button className="btn" onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  );
};

const mapStateToProp = ({ modalState: { isOpen, name, text } }) => {
  return {
    isOpen,
    name,
    text,
  };
};

const mapDispatchToProps = {
  closeModal: () => ({ type: MODAL_CLOSE }),
};

export default connect(mapStateToProp, mapDispatchToProps)(Modal);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
