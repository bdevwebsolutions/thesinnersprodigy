import React from 'react'

//Styled Components
import {Container, Content, Outline} from './styles';

//Functional Components
import {Cursor} from './cursor';

//LANDER
const Lander = () => {
    
    
    return (
        <Container>
            <video autoPlay muted loop id="myVideo">
                <source src="/back.mp4" type="video/mp4"/>
            </video>
            <Content>
                <h1>THESINNERSPRODIGY</h1>
                <p>MADE BY GILLES SCHEPERS</p>
                <Cursor/>
            </Content>
        </Container>
    )
}

export {Lander};