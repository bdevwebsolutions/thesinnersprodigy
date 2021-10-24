import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.4s !important;
    width: 100%;

    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

    height: "auto";
    max-height: ${props => props.trigger ? "1200px" : "0px"};

    overflow: hidden;

    @media only screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        height: ${props => props.trigger ? "auto" : "0px"};
    }

    //MOBILE
    @media only screen and (max-width: 720px){
        grid-template-columns: 1fr;
        grid-template-rows: 40px 1fr 1fr 1fr 1fr ;
        height: ${props => props.trigger ? "100vh" : "0px"};
        visibility: ${props => props.trigger ? "visible" : "hidden"};
        top: 0px;
        width: 100vw;
        left: 0;
        transition-duration: 0s !important;
        position: fixed;
        z-index: 10;
        border: none;
        background-color: white;
        padding: 30px !important;
        overflow: scroll;
    }

    border-bottom: solid 1px lightgrey;
    padding-bottom: ${props => props.trigger ? "15px !important" : "0px" }; 
` 

export const Sub = styled.div`
    display: grid;
    grid-template-rows: auto 450px;
    grid-gap: 15px;

    @media only screen and (max-width: 1200px){
        grid-template-rows: auto 500px;
    }


    @media only screen and (max-width: 720px){
        grid-template-rows: auto;
        border-bottom: solid 1px lightgrey !important;
        padding-bottom: 15px !important;
    }

`

export const List = styled.div`

    p{
        
        font-size: 14px;
        text-align: left !important;
        display: block;
        color: gray;
        text-decoration: underline;
        margin-bottom: 10px;
        
    }

    ul{
        display: flex !important;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;

        li{
            padding: 5px 0px;
            font-size: 14px !important;
            cursor: pointer;
            :hover{
                text-decoration: underline;
            }
        }

        a {
            padding: 5px 0px; 
            font-size: 12px !important;
            cursor: pointer;

        }
    }

    @media only screen and (max-width: 720px){
        ul{
            display: flex !important;

            li{
                font-size: 14px !important;
                display: block !important;
                width: 100%;
            }

        }


    }
    
`

export const Preview = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 1200px){
        height: 500px;
    }

    @media only screen and (max-width: 720px){
        height: 400px;
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