import React  from 'react'
import styled from 'styled-components';


//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import HomeContent from '../components/home';
import {Marq} from '../components/marque';

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
                promoter
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