import styled from 'styled-components';

export const Container = styled.div`

    display: grid !important;
    justify-content: center;
    align-items:center;
    height: 400px;
    
    form{
        width: 320px;
    }

    *{
        display: block;
    }

    label {
        margin-top: 15px;
        font-size: 12px;
    }

    input{
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        outline: none;
        border: solid 1px lightgray;
    }

    span{
        cursor: pointer;
        font-weight: bold;
        display: inline;
    }

    p{
        margin-top: 15px;
        font-size: 13px;
        text-align: center;
    }
`