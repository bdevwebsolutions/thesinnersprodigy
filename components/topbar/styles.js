import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`

    display: grid;
    grid-template-columns: 200px 1fr;

    line-height: 80px;
    
    *{
        display: inline-block;
    }

    overflow: hidden;
    padding: 15px;
    border-bottom: solid 1px lightgray;

    @media only screen and (max-width: 526px){
        grid-template-columns: 1fr;
        grid-template-rows: 80px 80px;
        height: auto;
    }

`

export const Logo = styled.div`

    svg{
        height: 35px;
        margin-top: 25px;
        cursor: pointer;


    }

    @media only screen and (max-width: 526px){
        svg{
            margin: 0px auto;
            margin-top: 35px;
            display: block;
        }

    }

`

export const Contact = styled.div`
    text-align: right;
    font-size: 12px;

    a{
        font-weight: bold;
    }

    @media only screen and (max-width: 526px){
        text-align: center;
    }
`