import React from 'react';
import Card from './Card';
import STORE from '../store';

function List(props) {
    const listArr = STORE.lists;
    {/*const title = listArr.map((_, i) => 
    <h2 key={listArr[i].id}>{listArr[i].header}</h2>
    );
    const keyNum = listArr.map((_, i) =>
    <Card key ={listArr[i].id} />
    )*/}

    const renderList = listArr.map((_, i) =>
        <div className="List-cards">
            <header className="List-header">
                <h2>{listArr[i].header}</h2>
            </header>
            <div className="List-cards">
                <Card key={listArr[i].id} />
            </div>
        </div>
    );
    console.log(props);
    return (
        <section className="List">
            {renderList}
        </section>
           
    )
}

export default List;