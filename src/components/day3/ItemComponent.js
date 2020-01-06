import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'

const ItemComponent = () => {

    const items = [
        {pno:1, pname:"01", price: 3000, amount: 0},
        {pno:2, pname:"02", price: 4000, amount: 0},
        {pno:3, pname:"03", price: 5000, amount: 0},
        {pno:4, pname:"04", price: 6000, amount: 0},
        {pno:5, pname:"05", price: 7000, amount: 0},
    ]

    const changeItem = () => {
        console.log("changeItem.....")
    }

    return(
        <div>
            <h1>Item Component</h1>
            <ItemList arr = {items} changeItem = {changeItem}></ItemList>
            <hr></hr>
            <ItemTotal></ItemTotal>
        </div>
    )
}
export default ItemComponent