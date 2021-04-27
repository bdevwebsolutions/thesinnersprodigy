import React from 'react';
import Title from '../../media/svg/title.svg';

//Styled Components
import {Container, Content} from './styles';

//Functional Components
import {Cursor} from './cursor';

//LANDER
const Lander = () => {
    
    
    return (
        <Container>
            <Content>
                {/* TITEL */}
                <Title/>
                <Cursor/>
            </Content>
        </Container>
    )
}

export {Lander};