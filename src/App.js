import React from 'react';

//import components
import Counter from './Counter';
import Modal from './Modal';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <>
      <Weather />
      <Counter />
      <Modal />
    </>
  );
}
