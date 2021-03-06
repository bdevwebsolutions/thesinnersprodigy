import styled from 'styled-components';
import TopBar from '../../../components/topbar';
import Nav from '../../../components/nav';
import { getCollectionsByID } from '../../../lib/shopify';
import { Collection, NoItem } from '../../../components/collections';
import {Marq} from '../../../components/marque';

//hoc
import {WithData} from '../../../components/hoc/withData';


const Items = (props) => {
    
    return (
        <>
        <Marq/>
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                {props.noItems ? <NoItem/> : <Collection items={props.items} title={props.title}/>}
            </ResponsiveContainer>
        </BodyContainer>
        </>
    )
}

//DATA FETCHING
export async function getServerSideProps(context) {
    
    
    const {handle, id} = context.params;
    //MAKE TITLE FROM HANDLE
    let title = handle.replace(/-/g," ").toUpperCase();

    //GET COLLECTON FROM ID
    let items = await getCollectionsByID(id);
    items = JSON.parse(JSON.stringify(items))

    if(items.length === 0){
        return {props: {noItems: true}};
    }

    
    return {
        props: {title, items}
    }
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



export default WithData(Items);