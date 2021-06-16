import React from 'react'
import { Container, Inner, Sub } from './styles';
import Link from 'next/link';


const BottomBar = () => {

    return(
    <Container>
        <Inner>
            <Sub>
               <p>Sitemap</p>
                <ul>
                    <Link href="/home">Home</Link>
                    <Link href="/media">Media</Link>
                    <Link href="/brand">Brand</Link>
                    <Link href="/login">Login</Link>
                </ul>
            </Sub> 
            <Sub>
               <p>Socials</p>
                <ul>
                    <Link href="/become-a-promoter">Become a promoter</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="https://www.instagram.com/thesinnersprodigy/" target="_blank">Instagram</Link>
                </ul>
            </Sub>
            <Sub>
               <p>More</p>
                <ul>
                    <Link href="/prestige">Prestige</Link>
                    <Link href="/policy#privacy">Privacy Policy</Link>
                    <Link href="/policy#deliveryandreturn">Delivery and return policy</Link>
                </ul>
            </Sub> 
        </Inner>
    </Container>
    )

}


export default BottomBar;