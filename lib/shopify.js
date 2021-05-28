import Client from 'shopify-buy';


//COLLECTION ID'S
export const NAVID = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTMxNTIxMTQ0Nw==";
export const NEWARRIVALSID = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTMxMDI2MzQ3OQ==";


export const client = Client.buildClient({
    domain: 'tsp-dev.myshopify.com',
    storefrontAccessToken: "8b30f726f7d6ef88ad583691e910adf0",
})

export const getProducts = async () => {
    //Get all products and put them into context
    let d = await client.product.fetchAll().then(res => {
        
        return res;
    }).catch(err => {
        return err;
    })
    
    return d;
}

export const getInfo = async () => {
    let d = await client.shop.fetchInfo().then(res => {
        
    }).catch(err => {
        
    })
}

export const getCollections = async () => {
    let d = await client.collection.fetchAll().then(res => {
        return res;
    })

    return d;
}

export const getCollectionsByID = async (id) => {
    let d = await client.collection.fetchWithProducts(id).then(res => {
        return res.products;
    })

    return d;
}

export const getProductByID = async (id) => {
    let d = await client.product.fetch(id).then((res) => {
        return res;
    })

    return d;
}