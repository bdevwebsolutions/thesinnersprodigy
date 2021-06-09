import React from 'react'
import { testCOMMUNITY, COMMUNITY, getCollectionsByID, testHIGHLIGHT, HIGHLIGHT, testNAV, NAV, getCollections } from '../lib/shopify';


export const ItemsContext = React.createContext(null);



const ItemsProvider = ({children}) => {

    const [initialData, setInitialData] = React.useState(null)


    const fetchInitialData = async () => {
        let nav = await getCollectionsByID(NAV);
        let community = await getCollectionsByID(COMMUNITY);
        let highlight = await getCollectionsByID(HIGHLIGHT);
        setInitialData([nav, community, highlight]);
        return true;
    }

    React.useEffect(async () => {
        let nav = await getCollectionsByID(NAV);
        let community = await getCollectionsByID(COMMUNITY);
        let highlight = await getCollectionsByID(HIGHLIGHT);
        setInitialData([nav, community, highlight]);
    },[])


    return <ItemsContext.Provider value={{initialData, setInitialData, fetchInitialData}}>{children}</ItemsContext.Provider>
}

export default ItemsProvider;