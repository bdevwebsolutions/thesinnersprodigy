import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`
    margin-top: 30px !important;
    display: grid;
    grid-template-rows: 1fr;

    line-height: 60px;
    
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

