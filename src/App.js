import React, { Component} from 'react';
import List from './composition/List';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        lists: [],
        allCards: {},
      },
    }
  }

  render() {
    const {store} = this.props
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id =>
                store.allCards[id]
                )}
            />
          ))}
        </div>
      </main>
    );
  } 
}