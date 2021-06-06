import React  from 'react'
import styled from 'styled-components';
import {ItemsContext} from '../context/itemsContext';


//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import HomeContent from '../components/home';
import {Marq} from '../components/marque';

//hoc
import {WithData} from '../components/hoc/withData';


const Home = (props) => {

    const {initialData} = React.useContext(ItemsContext);

    return (
        <>
        <Marq/>
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                {initialData !== null ? <HomeContent items={initialData[2]} community={initialData[1]}/> : "loading..."}
            </ResponsiveContainer>
        </BodyContainer>
        </>
    )
}

const BodyContainer = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
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