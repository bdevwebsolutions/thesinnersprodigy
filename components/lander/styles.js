import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    box-sizing: border-box;

    background-color: ${theme.white};
    color: ${theme.black};
    display: grid;
    justify-items: center;
    align-content: center;
    max-height: 100vh;
    overflow: hidden;

`
export const Content = styled.div`

    text-align: center;
    padding: 120px;
    overflow: hidden;
    z-index: 1;
    display: grid;
    width: 100%;
    max-width: 1200px;
    grid-gap: 15px;

    svg:first-of-type{
        max-width: 5%;
        margin: 0px auto;
        opacity: 0;
        animation-duration: 2s; /* the duration of the animation */
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-name: fadeIn;

    }

    svg:nth-of-type(2){
        max-width: 50%;
        margin: 0px auto;
        opacity: 0;
        animation-duration: 2s; /* the duration of the animation */
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-name: fadeIn;
    }

    svg:nth-of-type(3){
        max-width: 30%;
        margin: 0px auto;
        opacity: 0;
        animation-duration: 2s; /* the duration of the animation */
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-name: fadeIn;
    }

    button{
        opacity: 0;
        animation-duration: 2s; /* the duration of the animation */
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-name: fadeIn;

        padding: 35px;
        background-color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
        :hover{
            text-decoration: line-through;
        }
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100;
        }
    }

    @media only screen and (max-width: 900px){

        width: 100%;
        max-width: 100%;
        padding: 20px;
        svg:first-of-type{
            max-width: 30%;
            width: 40px;
        }

        svg:nth-of-type(2){
            max-width: 95%;
            width: 300px;
        }

        svg:nth-of-type(3){
            max-width: 80%;
            width: 200px;
        }
    }
`
