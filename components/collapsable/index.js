import React from 'react'
import Image from 'next/image';


//Components
import {Container, Sub, List, Preview} from './styles';

const Collapsable = ({visible}) => {

        return (
            <Container trigger={visible}>
                <Sub>
                    <List>
                        <p>NEW ARRIVALS</p>
                        <ul>
                            <li>Shirts</li>
                            <li>Sweats</li>
                            <li>Pants</li>
                            <li>Caps</li>
                            <li>Accessories</li>
                        </ul>
                    </List>
                    <Preview>
                        <Image src="/pictures/1.jpg" layout="fill" objectFit="cover" quality={30}/>
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>MEN</p>
                        <ul>
                            <li>Shirts</li>
                            <li>Sweats</li>
                            <li>Pants</li>
                            <li>Caps</li>
                            <li>Accessories</li>
                        </ul>
                    </List>
                    <Preview>
                        <Image src="/pictures/3.jpg" layout="fill" objectFit="cover" quality={30}/>
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>WOMAN</p>
                        <ul>
                            <li>Shirts</li>
                            <li>Sweaters</li>
                            <li>Pants</li>
                            <li>Caps</li>
                            <li>Accessories</li>
                        </ul>
                    </List>
                    <Preview>
                        <Image src="/pictures/2.jpg" layout="fill" objectFit="cover" quality={30}/>
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>ACCESSORIES</p>
                        <ul>
                            <li>Caps</li>
                            <li>Chains</li>
                            <li>Bracelets</li>
                        </ul>
                    </List>
                    <Preview>
                        <Image src="/pictures/4.jpg" layout="fill" objectFit="cover" quality={30}/>
                    </Preview>
                </Sub>
            </Container>
        )

}

export default Collapsable;