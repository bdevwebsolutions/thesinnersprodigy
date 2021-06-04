import React from 'react'
import Link from 'next/link';
import {Container} from './styles';

//Components
import Collapsable from '../collapsable';
import Cart from '../cart';

//media
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';
import { CartContext } from '../../context/cartContext';


const Nav = () => {

    const {cart} = React.useContext(CartContext);
    const [amount, setAmount] = React.useState(0);
    const [toggleCollaps, setToggleCollaps] = React.useState(false);
    const [toggleCart, setToggleCart] = React.useState(false);

    React.useEffect(() => {
        setAmount(cart.length)
    }, [cart])

    return(
        <Container>
            <ul>
                <li onClick={() => {setToggleCollaps(!toggleCollaps)}}>shop {toggleCollaps ? <RiArrowDownSFill/> : <RiArrowRightSFill/>}</li>
                <Link href="/media">media</Link>
                <Link href="/brand">brand</Link>
                <Link href="/login">login</Link>
                <Link href="/prestige">prestige</Link>
                <li onClick={() => {setToggleCart(!toggleCart)}}>cart <b>{amount > 0 ? amount : ""}</b></li>
            </ul>
            {/*Collapsable container */}
            <Collapsable visible={toggleCollaps} setVisible={setToggleCollaps}/>
            <Cart visible={toggleCart} setVisible={setToggleCart}/>
        </Container>
    )
}

export default Nav;