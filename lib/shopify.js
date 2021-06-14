import Client from 'shopify-buy';

const testToken = "7323051e435e65427e46525732df6456";
const prodToken = "adc26e1192ea06c29500f709812709cb";
const testUrl = "tsp-dev.myshopify.com"
const prodUrl = "the-sinners-prodigy.myshopify.com"

//COLLECTION ID'S
export const COMMUNITY = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MDMwNTE2NTQ3NQ=="
export const MEDIA = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MDMwNTM2MjA4Mw=="
export const HIGHLIGHT = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MDMwNTMyOTMxNQ=="

//PRODUCT ID4s
export const NAV_PRODUCT = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMjEzNTM1NjYzNzE="
export const COMMUNITY_PRODUCT = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMjEzNTE4OTUyMDM="
export const HIGHLIGHT_PRODUCT = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMjEzNTI3Nzk5Mzk="
export const MEDIA_PRODUCT = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMjEzNDQzNTg1NjM=";

//TESTID's
export const testNAV = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTMxNTIxMTQ0Nw=="
export const testCOMMUNITY = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk2MzQ5MzU1OQ=="
export const testMEDIA = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MDEwMjAwMzg5NQ=="
export const testHIGHLIGHT = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk2MjUxMDUxOQ=="


export const client = Client.buildClient({
    domain: prodUrl,
    storefrontAccessToken: prodToken,
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