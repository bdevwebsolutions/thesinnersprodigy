import React from 'react';
import {useRouter} from 'next/router';
import Screen from '../../media/svg/total-loggerscreen.svg';

//Styled Components
import {Container, Content} from './styles';


//LANDER
const Lander = () => {
    
    const router = useRouter()
    return (
        <Container>
            <Content>
                <Screen/>
                <button onClick={() => {router.push('/home')}}>CONTINUE</button>
            </Content>
        </Container>
    )
}

export {Lander};