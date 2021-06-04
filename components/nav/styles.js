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
        max-width: 350px;
        width: 100%;
        margin-bottom: 15px;

        li{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
            margin-right: 5px !important;
        }

        a{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
            margin-right: 5px !important;
        }

        a:last-of-type{
            font-weight: bold;
            padding: 0px 5px;
            background-color: black;
            color: white;
            border-radius: 5px;
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
                display: block !important;
                width: 100%;
            }

            a{
                padding: 10px 0px;
                display: block !important;
                width: 100%;
            }
        }
    }

`
