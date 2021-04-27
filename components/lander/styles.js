import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;

    background-color: ${theme.white};
    color: ${theme.black};
    display: grid;
    justify-items: center;
    align-content: center;

    video{
        position: absolute; 
        width: 900px;
        height: 507px;
        top: calc(50vh - 238px);
        left: calc(50vw - 450px);
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
    display: grid;
    width: 100%;
    max-width: 1200px;

    svg{
        max-width: 400px;
        margin: 0px auto;

    }
`

export const CursorContainer = styled.div`

    p{
        margin-top: 40px;
        text-shadow: 5px 5px 5px ${theme.white};
    }

    button {
        color: ${theme.black};
        background-color: white;

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
        text-shadow: 5px 5px 5px ${theme.white};
    }

    button:nth-of-type(2){

        :hover{
            transform: rotate(-20deg);
        }
    }

`