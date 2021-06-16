import React from 'react'
import styled from 'styled-components';

//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import LoginContent from '../components/login';
import {Marq} from '../components/marque';
import {AiFillInstagram} from 'react-icons/ai'

//hoc
import {WithData} from '../components/hoc/withData';

const Login = () => {
    return (
        <>
        <Marq/>
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
            <p>For more info contact us on <a href="https://www.instagram.com/thesinnersprodigy/" target="_blank">instagram <AiFillInstagram/></a></p>
            </ResponsiveContainer>
        </BodyContainer>
        </>
    )
}

export default WithData(Login)


const BodyContainer = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`

const ResponsiveContainer = styled.div`

    max-width: 1440px;
    width: 95%;
    margin: 0px auto;

    display: grid;
    place-items: center;

`

const ResponsiveContainerFixed = styled.div`
    max-width: 1440px;
    width: 95%;
    margin: 0px auto;
`
