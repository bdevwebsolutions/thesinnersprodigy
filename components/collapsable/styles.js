import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.4s !important;
    width: 100%;

    display: grid !important;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto; 
    grid-gap: 25px;

    max-height: ${props => props.trigger ? "auto" : "0px"};

    overflow: hidden;

    border-bottom: solid 1px lightgrey;
    padding-bottom: ${props => props.trigger ? "15px !important" : "0px" }; 


    @media only screen and (max-width: 1100px){
        grid-template-rows: auto;
        max-height: none;
        height: ${props => props.trigger ? "auto" : "0px"};
        li{
            padding-bottom: 15px;
        }
    }
` 

export const List = styled.div`
    * {
        display: block;
        width: 100%;
    }
`
export const Routing = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    p {
        color: grey;
        text-decoration: underline;
        font-size: 14px;
        padding-bottom: 10px;
    }

    li{
        color: black;
        font-size: 14px;
        padding-bottom: 5px;
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 500px){
        grid-template-columns: 1fr;
        ul{
            border-bottom: solid 1px lightgrey;
            padding-bottom: 15px;
        }
    }
`
export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    height: 450px;

    div{
        position: relative;
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 1100px){
        display: none;
    }
`

export const MobileButton = styled.button`
    display: none;


    @media only screen and (max-width: 720px){
        display: block;
        border: none;
        cursor: pointer;
        text-align: right;
        padding: 10px !important;
        font-weight: bold;
        :active{
            font-weight: bold;
        }
    }

`