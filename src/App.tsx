import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@zhuangjiaqing/betterui/dist/index.css';
import { BetterButton } from '@zhuangjiaqing/betterui';

function App() {
  return (
    <div className="App">
      <BetterButton btnType='primary'>Hello World</BetterButton>
    </div>
  );
}

export default App;
