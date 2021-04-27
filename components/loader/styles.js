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

    svg{
        width: 80px;
        height: 80px;
        color: black;
    }

    @keyframes svgAnimation{
        0%{
            stroke-dashoffset: 1200;
            fill: transparent;
        }
        50%{
            stroke-dashoffset: 0;
            fill: transparent;
        }
        100%{
            fill: black;
            stroke-dashoffset: 0;
        }
    }


    path{
        fill: transparent;
        stroke-width: 2;
        stroke: ${theme.black};

        stroke-dasharray: 1200;
        stroke-dashoffset: 1200;

        animation: svgAnimation 3.2s ease;
    }




`