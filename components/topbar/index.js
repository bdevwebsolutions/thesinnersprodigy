import React from 'react'
import Link from 'next/link';

import {Container, Logo, Contact, Sub} from './styles';
import Title from '../../media/svg/title.svg';
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
        </Container>
    )
}

export default TopBar;