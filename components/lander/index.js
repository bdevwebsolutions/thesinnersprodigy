import React from 'react';
import Cta from '../../media/svg/cta.svg';
import Chaos from '../../media/svg/chaos.svg';
import Logo from '../../media/svg/logo.svg';
import {useRouter} from 'next/router';

//Styled Components
import {Container, Content} from './styles';


//LANDER
const Lander = () => {
    
    const router = useRouter()
    return (
        <Container>
            <Content>
                <Logo/>
                <Cta/>
                <Chaos/>
                <button onClick={() => {router.push('/home')}}>CONTINUE</button>
            </Content>
        </Container>
    )
}

export {Lander};