import React from 'react';
import Card from './Card';
import STORE from '../store';

function List(props) {
    const listArr = STORE.lists;
    const title = listArr.map((_, i) => 
    <h2 key={listArr[i].id}>{listArr[i].header}</h2>
    );
    const keyNum = listArr.map((_, i) =>
    <Card key ={listArr[i].id} />
    )
    console.log(props);
    return (
        <section className="List">
            <header className="List-header">
                {title}
            </header>
            <div className="List-cards">
                {keyNum}
            </div>
        </section>
    );
}

export default List;