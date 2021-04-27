import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`

    display: grid;
    grid-template-columns: 200px 1fr;
    height: 80px;
    line-height: 80px;
    
    *{
        display: inline-block;
    }

    overflow: hidden;
    padding: 15px;
    border-bottom: solid 1px lightgray;

`

export const Logo = styled.div`

    svg{
        height: 35px;
        margin-top: 25px;
        cursor: pointer;
    }

`

export const Contact = styled.div`
    text-align: right;
    font-size: 12px;

    a{
        font-weight: bold;
    }
`