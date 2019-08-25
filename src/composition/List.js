import React from 'react';
import Card from './Card';
import STORE from '../store';

function List(props) {
    const arrayOfCard = STORE.allCards.map((card) =>
        <Card title={card.title} content={card.content} />
    )
    const arrayOfLis = STORE.lists.map((list) =>
    <section className="List" key={list.id}>
        <header className="List-header">
            <h2>{list.header}</h2>
        </header>
        <div className="List-cards">
            {arrayOfCard}
        </div>
    </section>
  )
    return (
        <div className="App-list">
            {arrayOfLis}   
        </div> 
    )
}

export default List;