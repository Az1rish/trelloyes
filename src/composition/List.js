import React from 'react';
import Card from './Card';

function List(props) {
    return (
        <section className="List">
            <header>
                {props.children}
            </header>
            <div className="List-cards">
                <Card />
            </div>
        </section>
    )
}

export default List;