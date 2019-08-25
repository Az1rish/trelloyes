import React from 'react';
import List from './composition/List';
import STORE from './store';

function App() {
  const listArr = STORE.lists;
  const title = listArr.map((_, i) =>
    <section className="List" key={listArr[i].id}>
      <div className="List-cards">
        <header className="List-header">
          <h2>{listArr[i].header}</h2>
          <List />
        </header>
      </div>
    </section>
  )
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {title}   
      </div>
    </main>
  );
}

export default App;

