import React from 'react';
import './App.css';
import { Icon } from './assets/icons/Icon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon type="pencil"></Icon>
        <Icon type="lock" width={20}></Icon>
        <Icon type="instagram" color="#fff" width={30} height={30}></Icon>
        <Icon type="youtube" color="#fff" width={30} height={30}></Icon>
        <Icon type="mail" color="#fff" width={30} height={30}></Icon>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
