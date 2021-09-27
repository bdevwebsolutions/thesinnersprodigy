import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`

    position: fixed !important;
    width: 400px;
    height: 100vh;
    max-height: 100vh;
    border-left: solid 1px lightgray;
    right: 0;
    top: 0;
    z-index: 99;
    background-color: ${theme.white};
    padding: 15px !important;
    transition-duration: 0.2s;

    p{
        display: block;
        
    }



    display: grid !important;
    grid-template-rows: 40px 1fr 60px 30px;

    @media only screen and (max-width: 400px){
        width: 100vw;
    }


`

export const List = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 150px);
    overflow: scroll;
    overflow-x: hidden;

`

export const Item = styled.div`
    width: 100%;
    display: grid !important;
    padding: 15px !important;
    grid-template-columns: 1fr 1fr 35px;
    grid-gap: 0px;
     p{
         text-align: left !important;
     }

    button{
        height: 35px;
        width: 35px;
        color: white;
        border: none;
        background-color: black;
        :hover{
            font-weight: bold;
            cursor: pointer;
        }
    }

    div{
        position: relative;
    }

    img{
        cursor: pointer !important;
    }

    @media only screen and (max-width: 720px){
        grid-template-columns: 1fr 1fr 35px !important;
        grid-gap: 0px;
        p{
            text-align: left !important;
            display: block !important;
        }

        button{
            height: 35px;
            width: 35px;
            color: white;
            border: none;
            background-color: black;
            :hover{
                font-weight: bold;
                cursor: pointer;
            }
        }

        div{
            position: relative;
        }
    }
`

export const Checkout = styled.div`

    text-align: center;
    background-color: black;
    color: white;
    line-height: 30px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    
`

export const Total = styled.div``

export const Titel = styled.div`
    border-bottom: solid 1px lightgray;
    margin-bottom: 15px;
    p{
        cursor: pointer;
        font-size: 20px;
        :hover{
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 720px){
        p:first-of-type{
                display: block !important;
                text-align: right!important;
                padding-right: 10px;
                font-weight: normal;
                margin-top: 5px;
                font-weight: bold;
        }
    }
`