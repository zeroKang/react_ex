import React from 'react'
import ItemDetails from './ItemDetails'

const ItemList = ({arr}) => {

    const lis = arr.map( item =><li key={item.pno}><ItemDetails {...item}/></li> )

    return(
        <ul>
            {lis}
        </ul>
    )
}
export default ItemList
