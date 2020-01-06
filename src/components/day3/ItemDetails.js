import React from 'react'

const ItemDetails = ({pno,pname,price, amount}) => {
    return (
        <li key= {pno}>
            <div>
                <h4>{pname}</h4>
                <h4>{price}</h4>
                <h4><input type='number' value={amount}></input></h4>
                <hr></hr>
            </div>
        </li>
    )
}
export default ItemDetails