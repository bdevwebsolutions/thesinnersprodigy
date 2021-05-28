import React from 'react'
import Link from 'next/link';

import {Container, Logo, Contact} from './styles';
import Title from '../../media/svg/logo.svg'
import {AiFillInstagram} from 'react-icons/ai';

//TOPBAR
/*
    - Logo
    - Contact
*/

const TopBar = () => {
    return (
        <Container>
            <Logo>
                <Link href="/home"><Title/></Link>
            </Logo>
            <Contact>
                <p>For more info contact us on <a href="https://www.instagram.com/thesinnersprodigy/" target="_blank">instagram <AiFillInstagram/></a></p>
            </Contact>
        </Container>
    )
}

export default TopBar;