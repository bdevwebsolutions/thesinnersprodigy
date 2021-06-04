import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`

`
//SLIDE
export const SlideContainer = styled.div`
    width: 100%;
    height: 640px;
`

export const Slide = styled.div`
    position: relative;
    width: 100%;
    height: 640px;
`
//-------------

//ABOUT
export const AboutContainer = styled.div`
    display: grid !important;
    justify-content: center;
    align-items: center;
    padding-top: 100px !important;
    padding-bottom: 100px !important;
    text-align: center;

    svg{
        height: 34px;
        margin: 0px auto;
    }

    h2{
        margin: 35px 0px 35px 0px!important;
        font-size: 18px;
        text-transform: uppercase;
    }

    h3{
        margin: 0px 0px 35px 0px !important;
        font-size: 26px;
        font-style: italic;
        text-transform: uppercase;
    }

    p{
        font-size: 14px;
        margin-bottom: 35px !important;
    }
`

//-----------------------------


//HIGHLIGHT
export const HighlightContainer = styled.div`

    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 15px;
    margin-bottom: 100px !important;

    @media only screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
`

export const HighLight = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
`

export const Text = styled.div`
    height: 40px;

    p{
        font-size: 13px;
        text-transform: uppercase;
        font-weight: bold;
    }

    span{
        font-size: 12px;
    }
`

//-------------------------------


//SOCIALS

export const SocialsContainer = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    background-color: lightgray;
    color: black;
    padding: 15px !important;

    p{
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }

`