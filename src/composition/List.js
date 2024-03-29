import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) { 
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header!=null && props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards!=null && props.cards.map((card) =>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onDeleteCard={props.onDeleteCard}
                    />
                )}
                <button 
                    type="button" className="List-add-button"
                    onClick={() => props.onRandomCard(props.id)}>
                    + Add Random Card
                </button>
            </div>
        </section> 
    )
}

List.defaultProps = {
    onRandomCard: () => {},
}