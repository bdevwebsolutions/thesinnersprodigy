import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {GiBowieKnife, GiAk47, GiSpikedBat} from 'react-icons/gi';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;

    background-color: ${theme.black};
    color: ${theme.white};
    display: grid;
    justify-items: center;
    align-content: center;

    video{
        position: absolute; 
        width: 600px;
        height: 338px;
        top: calc(50vh - 169px);
        left: calc(50vw - 300px);
        background-size: cover;
        overflow: hidden;
        z-index: 0;
    }

`
export const Content = styled.div`

    text-align: center;
    padding: 120px;
    overflow: hidden;
    z-index: 1;

    h1{
        margin-bottom: 5px;
        text-shadow: 5px 5px 5px ${theme.black};
    }

    p{
        font-size: 8px;
        margin: 0px auto;
        text-shadow: 5px 5px 5px ${theme.black};
    }

`

export const CursorContainer = styled.div`

    p{
        margin-top: 40px;
        text-shadow: 5px 5px 5px ${theme.black};
    }

    button {
        color: white;
        background-color: rgba(0,0,0,0);

        width: 60px;
        height: 60px;
        font-size: 32px;
        line-height: 65px;
        margin-top: 10px;
        margin-right: 15px;
        margin-left: 15px;
        outline: none;
        border: none;
        transition-duration: 0.2s;
        :hover{
            transform: rotate(20deg);
        }
        cursor: pointer;
        :active{
            outline: none;
        }
        text-shadow: 5px 5px 5px ${theme.black};
    }

    button:nth-of-type(2){

        :hover{
            transform: rotate(-20deg);
        }
    }

`