import React from 'react';
import List from './composition/List';
import STORE from './store';

function App() {
  const listArr = STORE.lists;
  /* const title = listArr.map((_, i) => 
    <h2 key={listArr[i].id}>{listArr[i].header}</h2>
    )*/
    
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List />
      </div>
    </main>
  );
}

export default App;

