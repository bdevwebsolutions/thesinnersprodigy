import styled from 'styled-components';
import TopBar from '../../../components/topbar';
import Nav from '../../../components/nav';
import { getProductByID } from '../../../lib/shopify';
import Product from '../../../components/product';
import {Marq} from '../../../components/marque';

//hoc
import {WithData} from '../../../components/hoc/withData';


const Item = (props) => {

    return (
        <>
        <Marq/>
        <BodyContainer>
            <ResponsiveContainerFixed>
                <TopBar/>
                <Nav/>
            </ResponsiveContainerFixed>
            <ResponsiveContainer>
                <Product product={props.product} />
            </ResponsiveContainer>
        </BodyContainer>
        </>
    )
}

export default WithData(Item);



//DATA FETCHING

export async function getServerSideProps(context) {
    
    
    const {title, id} = context.params;

    let product = await getProductByID(id);
    product = JSON.parse(JSON.stringify(product))

    
    return {
        props: {title, product}
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
