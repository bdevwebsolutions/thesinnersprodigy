import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`

    position: fixed !important;
    width: 400px;
    height: 100vh;
    border-left: solid 1px lightgray;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: ${theme.white};
    padding: 15px !important;
    transition-duration: 0.2s;

    p{
        display: block;
        
    }

    display: grid;
    grid-template-rows: 80px 1fr 60px 30px;

    @media only screen and (max-width: 400px){
        width: 100%;
    }

`

export const List = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 80px);
    overflow: scroll;
    overflow-x: hidden;

`

export const Item = styled.div`
    width: 100%;
    border: solid 1px red;
`

export const Checkout = styled.div`

    text-align: center;
    background-color: black;
    color: white;
    line-height: 30px;
    font-weight: bold;
    cursor: pointer;
    
`

export const Total = styled.div``

export const Titel = styled.div`
    border-bottom: solid 1px lightgray;
    margin-bottom: 15px;
    p{
        cursor: pointer;
    }
`