import React  from 'react'
import styled from 'styled-components';


//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import HomeContent from '../components/home';
import {Marq} from '../components/marque';
import {AiFillInstagram} from 'react-icons/ai'


//hoc
import {WithData} from '../components/hoc/withData';


const Home = () => {

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


const BodyContainer = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    text-align: center;
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

`

const ResponsiveContainerFixed = styled.div`
    max-width: 1440px;
    width: 95%;
    margin: 0px auto;
`





export default WithData(Home)