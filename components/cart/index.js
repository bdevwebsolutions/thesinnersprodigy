import React from 'react'
import {CartContext} from '../../context/cartContext';
import Image from 'next/image';
import {AiOutlineClose} from 'react-icons/ai'

//Compinents
import {Container, Item, Checkout, Total, Titel, List} from './styles';
import { useRouter } from 'next/router';

const Cart = ({visible, setVisible}) => {

    const {cart, setCart, handleCheckout} = React.useContext(CartContext);
    const [list, setList] = React.useState([])
    const [total, setTotal] = React.useState(0);
    const router = useRouter()

    const redirect = async (id, handle) => {
        console.log(id, handle)
        await router.push(`/item/${handle}/${encodeURIComponent(id.slice(0, -1))}%3D`);
        location.reload()
    }

    //Create elements
    const createElements = (cart) => {

        console.log(cart)
        let f = cart.map((el, index) => {
            return (
                <Item key={index} >
                    <p>{el[2]} - {el[4]}<br></br><b>€{el[1]}</b></p>
                    <div>
                        <Image priority={true} onClick={() => redirect(el[6], el[5])} src={el[3]} layout="fill" objectFit="contain"/>
                    </div>
                    <button onClick={() => {removeFromCart(index)}}>X</button>
                </Item>
            )
        })
        return f;
    }

    //Calculate total price
    const calculateTotal = (cart) => {
        let p = cart.reduce((total, current) => {
            return total + parseFloat(current[1]);
        }, 0)

        return p;
    }

    const removeFromCart = (index) => {

        //Remove from cart
        let d = cart;
        d.splice(index, 1);

        //REMOVE FROM LOCAL STORAGE
        localStorage.setItem('tsp-cart', JSON.stringify(d));

        //Create jsx elements
        let f = createElements(d);
        
        //Calculate total price
        let p = calculateTotal(cart)
        setTotal(p.toFixed(2))

        //Set to cart context
        setList(f)
        setCart(d);
    }

    React.useEffect(() => {
        //Only trigger when cart has items in it
        if(cart.length > 0){

            //ADD TO LOCAL STORAGE
            localStorage.setItem('tsp-cart', JSON.stringify(cart));

            //Create jsx elements
            let f = createElements(cart);

            //Calculate total price
            let p = calculateTotal(cart);

            //set to cart context
            setTotal(p.toFixed(2))
            setList(f)
        }
    }, [cart])

    if(visible){
        return (
            <Container>
                <Titel>
                    <p onClick={() => {setVisible(!visible)}}><AiOutlineClose/></p>
                </Titel>
                <List>
                {list}
                </List>
                <Total>
                    TOTAL: <b>€{total}</b>
                </Total>
                <Checkout onClick={() => { cart.length > 0 ? handleCheckout() : null}}>
                { cart.length <= 0 ? "NO ITEMS IN CART" : "CHECKOUT"}
                </Checkout>
            </Container>
        )
    } else {
        return null;
    }
}

export default Cart;