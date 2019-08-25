import React from 'react';
import Card from './Card';
import STORE from '../store';

function List(props) {
    const listArr = STORE.lists;
   
    const keyNum = listArr.map((_, i) =>
    <Card key ={listArr[i].id} />
    );

    console.log(props);
    return (
        <div className="List-cards">
            <Card />
        </div>   
    )
}

export default List;