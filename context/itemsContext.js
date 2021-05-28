import React from 'react'
import { getProducts } from '../lib/shopify';


export const ItemsContext = React.createContext(null);



const ItemsProvider = ({children}) => {

    const [STORE, SETSTORE] = React.useState(null)


    const fetchStore = async () => {
        let d = await getProducts();
        SETSTORE(d);
        return true;
    }


    return <ItemsContext.Provider value={{STORE, SETSTORE, fetchStore}}>{children}</ItemsContext.Provider>
}

export default ItemsProvider;