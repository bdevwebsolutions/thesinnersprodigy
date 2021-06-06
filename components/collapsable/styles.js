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
        height: ${props => props.trigger ? "800px" : "0px"};
    }

    @media only screen and (max-width: 750px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        height: ${props => props.trigger ? "1400px" : "0px"};
    }

    border-bottom: solid 1px lightgrey;
    padding-bottom: ${props => props.trigger ? "15px !important" : "0px" }; 
` 

export const Sub = styled.div`
    display: grid;
    grid-template-rows: auto 450px;
    grid-gap: 15px;

    @media only screen and (max-width: 1200px){
        grid-template-rows: auto 200px;
    }


    @media only screen and (max-width: 1200px){
        grid-template-rows: auto 160px;
    }

`

export const List = styled.div`

    p{
        
        font-size: 14px;
        text-align: left !important;
        display: block;
        color: gray;
        text-decoration: underline;
        
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
        }

        a {
            padding: 5px 0px; 
            font-size: 12px !important;
            cursor: pointer;
        }
    }
    
`

export const Preview = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 1200px){
        height: 200px;
    }

    @media only screen and (max-width: 1200px){
        height: 160px;
    }

`