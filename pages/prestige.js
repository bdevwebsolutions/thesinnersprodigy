import React  from 'react'
import styled from 'styled-components';


//Components
import TopBar from '../components/topbar';
import Nav from '../components/nav';
import HomeContent from '../components/home';



const Home = () => {

    return (
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                <h2>Prestige</h2>
                <p>In the future we’re going to reward our customers with a elite point system.<br></br> Each time you purchase an item from the store you will recieve points on your account. These points grant you with extra benefits through the brand.<br></br> Some examples: early access to upcoming releases, coupon codes or free accessories/clothing. 
                <br></br>This way we want to thank our community with support they’re giving us.<br></br><br></br>
*Note: All points achieved before the prestige system is online are already counted till the release.  </p>
            </ResponsiveContainer>
        </BodyContainer>
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
    text-align: center;
    padding-top: 40px;

    h2{
        margin-bottom: 15px;
    }

`

const ResponsiveContainerFixed = styled.div`
    max-width: 1440px;
    width: 95%;
    margin: 0px auto;
`





export default Home