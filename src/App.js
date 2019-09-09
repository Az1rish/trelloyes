import React, { Component} from 'react';
import List from './composition/List';
import './App.css';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4) +     Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
} 

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: STORE,
    }
  }

  handleDeleteCard = (card) => {
    console.log('handle delete card called', { card })
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id =>
        id !== card)
    }));

    const newCards = omit(allCards, card);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleRandomCard = (listId) => {
    console.log('handle random card called', { listId })
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const {store} = this.state
    
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id =>
                store.allCards[id]
                )}
              onDeleteCard={this.handleDeleteCard}
              onRandomCard={this.handleRandomCard}
            />
          ))}
        </div>
      </main>
    );
  } 
}