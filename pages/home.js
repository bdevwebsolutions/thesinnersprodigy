import React  from 'react'
import styled from 'styled-components';
import {getCollections, getCollectionsByID} from '../lib/shopify';


//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import HomeContent from '../components/home';



const Home = (props) => {

    console.log(props)

    return (
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                <HomeContent items={props.items} community={props.community}/>
            </ResponsiveContainer>
        </BodyContainer>
    )
}

export async function getServerSideProps(context) {
    

    //GET COLLECTON FROM ID
    let community = await getCollectionsByID("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk2MzQ5MzU1OQ==");
    community = JSON.parse(JSON.stringify(community))
    let items = await getCollectionsByID("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk2MjUxMDUxOQ==");
    items = JSON.parse(JSON.stringify(items))
    console.log(items)

    if(items.length === 0){
        return {props: {noItems: true}};
    }

    
    return {
        props: {items, community}
    }
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





export default Home