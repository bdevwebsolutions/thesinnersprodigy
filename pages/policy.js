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
                <h2 id="privacy">Privacy Policy</h2>
                <p>Currently we don't use any form of tracking or cookies. Your privacy is completely yours on our site.</p>
                <br></br>
                <hr></hr>
                <br></br>
                <h2 id="deliveryandreturn">Delivery and return policy</h2>
                <br></br>
                <h3>Returns</h3>
                <p>Our policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
                <br></br>
                <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                <p>Non returnable items: </p>
                <ul>
                    <li>Gift Cards</li>
                    <li>Stickers </li>
                </ul>
                <p>To complete your return, we require a receipt or proof of purchase.Please do not send your purchase back to the manufacturer.</p>
                <br></br>
                <br></br>
                <h3>Refunds (if applicable)</h3>
                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                    If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
                <br></br>
                <h3>Late or missing refunds (if applicable)</h3><p>
                If you haven’t received a refund yet, first check your bank account again.
                Then contact your credit card company, it may take some time before your refund is officially posted.
                Next contact your bank. There is often some processing time before a refund is posted.
                If you’ve done all of this and you still have not received your refund yet, please contact us.</p>
                <br></br>
                <h3>Sale items (if applicable)</h3><p>
                Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
                <br></br>
                <h3>Exchanges (if applicable)</h3><p>
                We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us a email …@thesinnersprodigy.com or fill in the contactform</p>
                <br></br>
                <h3>Gifts</h3><p>
                If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
                <br></br>
                <br></br>
                <h3>Shipping</h3>
                <p>To return your product, send us an message with the contactform or send us a email   ….@thesinnersprodigy.

You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.

Depending on where you live, the time it may take for your exchanged product to reach you, may vary.

If you are shipping an item, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
                
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
    margin: 0px auto 35px auto;

    ul{
        list-style-type: none;
        li{
            padding-left: 15px;
            ::before{
                content: '- '
            }
        }
    }

    p{
        font-size: 14px;
    }
    h3{
        font-size: 16px;
    }

    h2{
        font-size: 18px;
    }

`

const ResponsiveContainerFixed = styled.div`
    max-width: 1440px;
    width: 95%;
    margin: 0px auto;
`





export default Home