import React from 'react';
import './App.css';
import { ContextProvider } from './transContext';
import Child from './Child';

function App() {

  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
}

export default App;

