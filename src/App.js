import React from 'react';
import List from './composition/List';
import STORE from './store';

function App() {

  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <List />
    </main>
  );
}

export default App;

