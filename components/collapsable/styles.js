import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.25s ease-out !important;
    width: 100%;

    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

    height: ${props => props.trigger ? "620px" : "0px"};

    overflow: hidden;
` 

export const Sub = styled.div`
    display: grid;
    grid-template-rows: 1fr 450px;
`

export const List = styled.div`

    p{
        font-weight: bold;
        font-size: 14px;
        text-decoration: underline;
    }

    ul{
        display: flex !important;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;

        li{
            padding: 5px 0px;
        }
    }
`

export const Preview = styled.div`
    position: relative;
    width: 100%;
    height: 450px;
`