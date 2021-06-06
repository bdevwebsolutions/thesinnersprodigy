import React from 'react'
import {Container} from './styles';
import Logo from '../../media/svg/logo.svg';
import CountUp from 'react-countup';

export const Loader = ({clear}) => {

    return (
        <Container>
            <Logo/>
            <CountUp redraw={true} style={{color: "black", fontSize: 14, marginTop: 10}} start={0} end={100} duration={3} onEnd={() => {clear(false)}}/>
        </Container>
    )

}