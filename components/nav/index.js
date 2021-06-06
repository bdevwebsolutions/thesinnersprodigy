import React from 'react'
import Link from 'next/link';
import {Container, Placer} from './styles';

//Components
import Collapsable from '../collapsable';
import Cart from '../cart';

//media
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';
import {AiFillInstagram} from 'react-icons/ai';
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
            <Placer>
                <ul>
                    <li onClick={() => {setToggleCollaps(!toggleCollaps)}}>shop {toggleCollaps ? <RiArrowDownSFill/> : <RiArrowRightSFill/>}</li>
                    <Link href="/media">media</Link>
                    <Link href="/brand">brand</Link>
                    <Link href="/login">login</Link>
                    <Link href="/prestige">prestige</Link>
                    <li onClick={() => {setToggleCart(!toggleCart)}}>cart <b>{amount > 0 ? amount : ""}</b></li>
                </ul>
                {/*Collapsable container */}
                <Cart visible={toggleCart} setVisible={setToggleCart}/>
                <p>For more info contact us on <a href="https://www.instagram.com/thesinnersprodigy/" target="_blank">instagram <AiFillInstagram/></a></p>
            </Placer>
            <Collapsable visible={toggleCollaps} setVisible={setToggleCollaps}/>
        </Container>
    )
}

export default Nav;