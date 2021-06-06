import React from 'react'
import styled from 'styled-components';

//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import MediaContent from '../components/media';

//hoc
import {WithData} from '../components/hoc/withData';

const Media = () => {

    return (
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                <MediaContent/>
            </ResponsiveContainer>
        </BodyContainer>
    )
}

export default WithData(Media)


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
