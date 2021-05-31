import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: auto;
    background-color: black;
    z-index: 10;
    color: lightgray;
    padding-bottom: 15px;

`

export const Inner = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 15px;
    margin: 0px auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 15px;
    }
`

export const Sub = styled.div`
    display: block;
    p {
        margin: 5px 0px !important;
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
    }
    ul{
        display: block;
        text-align: left;
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        font-size: 12px;
        text-align: center;
        
        a{
            display: block;
            :hover{
                color: white;
            }
        }
    }

    @media only screen and (max-width: 800px){
        p{
            text-align: left;
        }

        ul{
            text-align: left;
        }
    }

`