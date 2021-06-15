import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Placer = styled.div`
    display: grid !important;
    width: 100%;
    grid-template-columns: auto 1fr;

    p{
        display: inline-block !important;
        width: 100%;
        text-align: right !important;
        font-size: 12px;
        line-height: 28px;
    }

    
    ul{
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: auto;
        margin-bottom: 15px;

        li{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
            margin-right: 5px !important;
            padding: 4px 10px;
        }

        li:first-of-type{
            padding: 4px 10px 4px 0px;
        }

        li:last-of-type{

            width: 60px;
            height: 60px;
            max-width: 60px;
            max-height: 60px;
            padding: 15px;
            border-radius: 80px;
            color: black;
            cursor: pointer;
            font-size: 18px;
            font-weight: normal;
            line-height: 30px;
            z-index: 98;

            @media only screen and (min-width: 721px){
                position: fixed;
                top: 40px;
                right: 40px;
            }

            @media only screen and (max-width: 720px){
                position: fixed;
                bottom: 40px;
                right: 20px;
                background-color: white;
                box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
            }
        }

        a{
            font-size: 13px;
            text-transform: uppercase;
            cursor: pointer;
            margin-right: 5px !important;
            padding: 4px 10px;
        }

        a:last-of-type{
            font-weight: bold;
            background-color: black;
            color: white;
            border-radius: 2px;
            transition-duration: 0.2s;

            :hover{
                background-color: white;
                color: black;
            }
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
                padding: 10px 5px;
                display: block !important;
                width: 100%;
            }

        }

        p{
            display: none!important;
        }
        grid-template-columns: 1fr;
    }


`

export const Container = styled.div`
    
    *{
        display: inline-block;
    }

    overflow: hidden;
    padding: 15px 0px !important;


`

