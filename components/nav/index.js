import React from 'react'
import Link from 'next/link';
import {Container} from './styles';

//Components
import Collapsable from '../collapsable';

//media
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';


const Nav = () => {

    const [toggleCollaps, setToggleCollaps] = React.useState(true);

    return(
        <Container>
            <ul>
                <li onClick={() => {setToggleCollaps(!toggleCollaps)}}>shop {toggleCollaps ? <RiArrowDownSFill/> : <RiArrowRightSFill/>}</li>
                <li><a href="">media</a></li>
                <li><a href="">brand</a></li>
                <li><a href="">login</a></li>
                <li><a href="">cart</a></li>
            </ul>
            {/*Collapsable container */}
            <Collapsable visible={toggleCollaps}/>
        </Container>
    )
}

export default Nav;