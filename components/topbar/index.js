import React from 'react'
import Link from 'next/link';

import {Container, Logo, Contact, Sub} from './styles';
import LogoIcon from '../../media/svg/logo.svg'
import Title from '../../media/svg/title.svg';
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
            <Sub>
                <Link href="/home"><LogoIcon/></Link>
                <Contact>
                    <p>For more info contact us on <a href="https://www.instagram.com/thesinnersprodigy/" target="_blank">instagram <AiFillInstagram/></a></p>
                </Contact>
            </Sub>
        </Container>
    )
}

export default TopBar;