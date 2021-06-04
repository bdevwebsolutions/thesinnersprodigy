import React from 'react'
import {CartContext} from '../../context/cartContext';

//Compinents
import {Container, Item, Checkout, Total, Titel, List} from './styles';

const Cart = ({visible, setVisible}) => {

    const {cart, setCart, handleCheckout} = React.useContext(CartContext);
    const [list, setList] = React.useState([])
    const [total, setTotal] = React.useState(0);

    const removeFromCart = (index) => {
        let d = cart;
        d.splice(index, 1);

        let f = d.map((el, index) => {
            return (
                <Item>
                    <p>{el[1]}</p>
                    <p>{el[2]}</p>
                    <button onClick={() => {removeFromCart(index)}}>X</button>
                </Item>
            )
        })
        
        let p = cart.reduce((total, current) => {
            return total + parseFloat(current[1]);
        }, 0)

        setTotal(p.toFixed(2))
        setList(f)
        setCart(d);
    }

    React.useEffect(() => {
        if(cart.length > 0){
        let f = cart.map((el, index) => {
            return (
                <Item key={index}>
                    <p>€{el[1]}</p>
                    <p>{el[2]}</p>
                    <button onClick={() => {removeFromCart(index)}}>X</button>
                </Item>
            )
        })
        setList(f)

        let p = cart.reduce((total, current) => {
            return total + parseFloat(current[1]);
        }, 0)
        setTotal(p)
        }
    }, [cart])

    if(visible){
        return (
            <Container>
                <Titel>
                    <h3>Cart</h3>
                    <p onClick={() => {setVisible(!visible)}}>close</p>
                </Titel>
                <List>
                {
                    list
                }
                </List>
                <Total>
                    TOTAL: €{total}
                </Total>
                <Checkout onClick={handleCheckout}>
                    PROCEED TO CHEKOUT
                </Checkout>
            </Container>
        )
    } else {
        return null;
    }
}

export default Cart;