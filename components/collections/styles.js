import styled from 'styled-components';

export const Item = styled.div`

    display: grid;
    grid-template-rows: 450px auto;
    grid-gap: 15px;

    p{
        display: block;
        font-size: 14px;
        padding-bottom: 15px;
    }

    div{
        position: relative;
        height: 100%;
        width: 100%;
    }
    border-bottom: solid 1px lightgray;

    opacity: 1;
    transition-duration: 0.2s;
    :hover{
        p{
            font-weight: bold;
        }
    }


`

export const Container = styled.div`
    margin-bottom: 35px !important;
    @media only screen and (max-width: 850px){
        padding: 15px !important;
    }
`

export const Title = styled.h3`
    margin: 35px 0px !important;
    text-align: center;
`

export const Grid = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 35px;


    @media only screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 850px){
        grid-template-columns: 1fr;
    }

`


//

