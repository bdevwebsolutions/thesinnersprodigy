import React from 'react'
import styled from 'styled-components'
import {CursorContainer} from './styles';


//ICONS
import {GiBowieKnife, GiAk47, GiSpikedBat} from 'react-icons/gi';

export const Cursor = () => {


    return (
        <CursorContainer>
            <p>CHOOSE YOUR FIGHTER TO CONTINUE</p>
            <>
                <button><GiAk47/></button>
                <button><GiBowieKnife/></button>
                <button><GiSpikedBat/></button>
            </>
        </CursorContainer>
    )
}