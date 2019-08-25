import React from 'react';
import List from './composition/List';
import STORE from './store';

function App() {
  const listArr = STORE.lists;
  const listNum = listArr.map((_, i) => 
    <List key={listArr[i].id} />
    )
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listNum}
      </div>
    </main>
  );
}

export default App;

