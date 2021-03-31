import styled from 'styled-components';
import {theme} from '../../styles/theme';

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

    font-size: 68px;

    @keyframes svgAnimation{
        0%{
            stroke-dashoffset: 1200;

        }
        50%{
            stroke-dashoffset: 0;

        }
        100%{
            stroke-dashoffset: 1200;

        }
    }

    path{
        fill: transparent;
        stroke-width: 5;
        stroke: #FFFFFF;

        stroke-dasharray: 1200;
        stroke-dashoffset: 1200;

        animation: svgAnimation 3s ease forwards;
    }




`