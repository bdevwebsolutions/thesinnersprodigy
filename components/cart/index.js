import React from 'react'

//Compinents
import {Container, Item, Checkout, Total, Titel} from './styles';

const Cart = ({visible, setVisible}) => {


    if(visible){
        return (
            <Container>
                <Titel>
                    <h3>Cart</h3>
                    <p onClick={() => {setVisible(!visible)}}>close</p>
                </Titel>
                <Item>
                    <p>BLACK CHAOS HOODIE</p>
                    <span>€50.00</span>
                </Item>
                <Total>
                    TOTAL: €50,00
                </Total>
                <Checkout>
                    CHECKOUT
                </Checkout>
            </Container>
        )
    } else {
        return null;
    }
}

export default Cart;