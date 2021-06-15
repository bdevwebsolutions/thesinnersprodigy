import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 35px;
    margin-bottom: 35px !important;
    margin-top: 35px !important;

    @media only screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
`

export const View = styled.div`
    padding: 15px !important;
    @media only screen and (max-width: 900px){
        grid-row: 1/2;
        max-width: 90vw;
        margin: 0px auto !important;
    }
`


export const Info = styled.div`

    button{
        display: block;
        width: 100%;
        padding: 10px 8px;
        background-color: white;
        border: solid 1px lightgrey;
        cursor: pointer;
        
        :hover{
            border: solid 1px grey;
        }
    }

    @media only screen and (max-width: 720px){
        button{
            max-width: 80vw;
            margin: 15px auto;

        }
        max-width: 80vw;
        margin: 0px auto !important;
    }

`

export const MainInfo = styled.div`
    h3{
        display: block;

    }

    sub{
        display: block;
        border-bottom: solid 1px black;
        margin-bottom: 15px;
        padding-bottom: 5px;
    }

    p{
        display: block;
        height: auto;
        *{
            font-family: 'Noto Sans', sans-serif !important;
            font-size: 14px;
        }
    }

    span{
        display: block;
        height: auto;
        *{
            font-family: 'Noto Sans', sans-serif !important;
            padding: 0px !important;
            margin: 0px !important;
            line-height: auto;
        }
        font-size: 14px;
        padding: 0px !important;
        margin: 0px !important;
    }
`

export const CheckoutForm = styled.div`
    select{
        display: block;
        width: 100%;
        padding: 8px 10px;
        border: solid 1px black;
        background-color: black;
        color: white;
        font-weight: bold;
        margin: 15px 0px;
        border-radius: 5px;
    }

    option{
        padding: 15px 0px !important;
        font-weight: bold;
        background-color: white;
        color: black;
    }

    @media only screen and (max-width: 720px){
        select{
            max-width: 80vw;
            margin: 15px auto;
        }
    }
`

export const Price = styled.p`
    font-size: 18px;
    display: block;
    margin-bottom: 35px !important;
`

export const Warn = styled.p`
    display: block;
    margin-top: 15px !important;
    text-align: center;
`