import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.div`
    
    *{
        display: inline-block;
    }

    overflow: hidden;
    padding: 15px 0px !important;

    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 300px;
        width: 100%;
        margin-bottom: 15px;

        li{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
        }

        a{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
        }

        li:hover{
            font-weight: bold;
        }

        a:hover{
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 720px){
        ul{
            flex-direction: column;
            text-align: left;
            width: 100%;

            li{
                padding: 10px 0px;
            }

            a{
                padding: 10px 0px;
            }
        }
    }

`
