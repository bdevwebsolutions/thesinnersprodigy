import React from 'react';
import styled from 'styled-components';


const Marquee = () => {
    return (
    <Container>
        <marquee>| THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY | THE SINNERS PRODIGY</marquee>
    </Container>
    )
}

export default Marquee;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    font-size: 12px;
    font-weight: bold;
    border-bottom: solid 1px black;
    border-top: solid 1px black;
    height: 20px;
    line-height: 20px;
`

