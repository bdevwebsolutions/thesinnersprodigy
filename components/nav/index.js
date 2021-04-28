import React from 'react'
import Link from 'next/link';
import {Container} from './styles';

//Components
import Collapsable from '../collapsable';
import Cart from '../cart';

//media
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';


const Nav = () => {

    const [toggleCollaps, setToggleCollaps] = React.useState(false);
    const [toggleCart, setToggleCart] = React.useState(false);

    return(
        <Container>
            <ul>
                <li onClick={() => {setToggleCollaps(!toggleCollaps)}}>shop {toggleCollaps ? <RiArrowDownSFill/> : <RiArrowRightSFill/>}</li>
                <li><a href="/media">media</a></li>
                <li><a href="/brand">brand</a></li>
                <li><a href="/login">login</a></li>
                <li onClick={() => {setToggleCart(!toggleCart)}}>cart</li>
            </ul>
            {/*Collapsable container */}
            <Collapsable visible={toggleCollaps}/>
            <Cart visible={toggleCart} setVisible={setToggleCart}/>
        </Container>
    )
}

export default Nav;