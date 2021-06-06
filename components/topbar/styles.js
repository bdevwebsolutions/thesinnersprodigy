import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`
    margin-top: 60px !important;
    display: grid;
    grid-template-rows: 1fr 100px;

    line-height: 120px;
    
    *{
        display: inline-block;
    }

    overflow: hidden;
    border-bottom: solid 1px lightgray;

    @media only screen and (max-width: 526px){
        grid-template-columns: 1fr;
        grid-template-rows: 80px;
        height: auto;
        margin-top: 30px !important;
    }

`

export const Logo = styled.div`
    text-align: center;

    svg{
        height: 100px;
        margin: 0px auto;
        cursor: pointer;

    }

    @media only screen and (max-width: 526px){
        svg{
            height: 60px;
            margin: 0px auto;
            margin-top: 0px;
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

export const Sub = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    text-align: left;

    svg{
        height: 30px;
        cursor: pointer;
        margin-top: 25px !important;

    }

    @media only screen and (max-width: 526px){
        display: none;

    }
    
`