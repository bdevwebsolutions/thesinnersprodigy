import React from 'react'
import { testCOMMUNITY, getCollectionsByID, testHIGHLIGHT, testNAV, getCollections } from '../lib/shopify';


export const ItemsContext = React.createContext(null);



const ItemsProvider = ({children}) => {

    const [initialData, setInitialData] = React.useState(null)


    const fetchInitialData = async () => {
        let nav = await getCollectionsByID(testNAV);
        let community = await getCollectionsByID(testCOMMUNITY);
        let highlight = await getCollectionsByID(testHIGHLIGHT);
        setInitialData([nav, community, highlight]);
        return true;
    }

    React.useEffect(async () => {
        let nav = await getCollectionsByID(testNAV);
        let community = await getCollectionsByID(testCOMMUNITY);
        let highlight = await getCollectionsByID(testHIGHLIGHT);
        setInitialData([nav, community, highlight]);
    },[])


    return <ItemsContext.Provider value={{initialData, setInitialData, fetchInitialData}}>{children}</ItemsContext.Provider>
}

export default ItemsProvider;