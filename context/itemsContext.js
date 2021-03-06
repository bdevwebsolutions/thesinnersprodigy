import React from 'react'
import { COMMUNITY_PRODUCT, getProductByID, NAV_PRODUCT, HIGHLIGHT_PRODUCT, MEDIA_PRODUCT } from '../lib/shopify';


export const ItemsContext = React.createContext(null);



const ItemsProvider = ({children}) => {

    const [initialData, setInitialData] = React.useState(null)


    const fetchInitialData = async () => {

        let nav_product = await getProductByID(NAV_PRODUCT);
        let community_product = await getProductByID(COMMUNITY_PRODUCT);
        let highlight_product = await getProductByID(HIGHLIGHT_PRODUCT);
        let media_product = await getProductByID(MEDIA_PRODUCT);
        setInitialData([nav_product, community_product, highlight_product, media_product]);

        //SET LOCALLY ASWELL
        window.localStorage.setItem('tsp-data', JSON.stringify([nav_product, community_product, highlight_product, media_product]));

        return true;
    }

    React.useEffect(async () => {

        let data = window.localStorage.getItem('tsp-data');
        if(JSON.parse(data).length > 0){
            setInitialData(JSON.parse(data));
            let nav_product = await getProductByID(NAV_PRODUCT);
            let community_product = await getProductByID(COMMUNITY_PRODUCT);
            let highlight_product = await getProductByID(HIGHLIGHT_PRODUCT);
            let media_product = await getProductByID(MEDIA_PRODUCT);
            window.localStorage.setItem('tsp-data', JSON.stringify([nav_product, community_product, highlight_product, media_product]));
            setInitialData([nav_product, community_product, highlight_product, media_product]);
        } else {
            let nav_product = await getProductByID(NAV_PRODUCT);
            let community_product = await getProductByID(COMMUNITY_PRODUCT);
            let highlight_product = await getProductByID(HIGHLIGHT_PRODUCT);
            let media_product = await getProductByID(MEDIA_PRODUCT);
            setInitialData([nav_product, community_product, highlight_product, media_product]);
    
            //SET LOCALLY ASWELL
            window.localStorage.setItem('tsp-data', JSON.stringify([nav_product, community_product, highlight_product, media_product]));
        }

    },[])


    return <ItemsContext.Provider value={{initialData, setInitialData, fetchInitialData}}>{children}</ItemsContext.Provider>
}

export default ItemsProvider;