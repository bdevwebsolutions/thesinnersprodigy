import React, {useState, useEffect} from 'react'
import {Container} from './styles';
import {GiBalaclava} from 'react-icons/gi';
import CountUp from 'react-countup';

export const Loader = ({clear}) => {

    return <Container><GiBalaclava/><CountUp style={{color: "grey", fontSize: 12, marginTop: 10}} start={0} end={100} duration={3} onEnd={() => {clear(false)}}/></Container>

}