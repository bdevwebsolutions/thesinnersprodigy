import { useRouter } from 'next/router';
import React from 'react'
import {client} from '../lib/shopify';

export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    const router = useRouter()

    const [cart, setCart] = React.useState([]);

    //Useffect to get from localstorage
    React.useEffect(() => {
        let local = JSON.parse(localStorage.getItem('tsp-cart'));
       
        if(local === null || local.length === 0){
            setCart([])
        } else {
            setCart(local);
        }
    }, [])

    const handleCheckout = async () => {
        let checkout = await client.checkout.create().then(chk => {
            return chk;
        })

        let itemsToAdd = cart.map(el => {
            return {variantId: el[0], quantity: 1}
        });

        let FINAL = await client.checkout.addLineItems(checkout.id, itemsToAdd).then(chk => {
            return chk;
            //router.push(encodeURIComponent(chk.url));
        })

        router.push(FINAL.webUrl)

    }

    return <CartContext.Provider value={{cart, setCart, handleCheckout}}>{children}</CartContext.Provider>
}

export default CartProvider;