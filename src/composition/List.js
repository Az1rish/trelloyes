import React from 'react';
import Card from './Card';
import STORE from '../store';

function List(props) {
    const listArr = STORE.lists;
    const title = listArr.map((_, i) => 
    <h2 key={listArr[i].id}>{listArr[i].header}</h2>
    );
    console.log(props);
    return (
        <section className="List">
            <header className="List-header">
                {title}
            </header>
            <div className="List-cards">
                <Card />
            </div>
        </section>
    );
}

export default List;