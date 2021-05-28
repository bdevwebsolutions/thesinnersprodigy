import React from 'react'
import {Container, Info, View, MainInfo, CheckoutForm, Price} from './styles';
import {CartContext} from '../../context/cartContext';


const Product = ({product}) => {

    const [variant, setVariant] = React.useState(product.variants[0].id)
    const [price, setPrice] = React.useState(product.variants[0].price)
    const [title, setTitle] = React.useState(product.variants[0].title)
    const [added, setAdded] = React.useState(false);

    //CARTCONTEXT
    const {cart, setCart} = React.useContext(CartContext);

    const selectVariant = (e) => {
        setVariant(e.target.value);
        product.variants.map(el => {if(el.id === e.target.value){ setPrice(el.price); setTitle(el.title)} else {null}});
    }

    const addToCart = () => {
        let p = [variant, price, title]
        setCart([...cart, p]);
        setAdded(true);
    }

    return (
        <Container>
            <View></View>
            <Info>
                <MainInfo>
                    <h3>{product.title}</h3>
                    <sub>{product.productType ? product.productType : ""}</sub>
                    <p>{product.description ? product.description : ""}</p>
                </MainInfo>
                {product.variants.length > 1 ? 
                    <CheckoutForm>
                        <select onChange={e => {selectVariant(e)}}>
                            {product.variants.map(el => {
                                return <option key={el.id} value={el.id}>{el.title}</option>
                            })}
                        </select>
                    </CheckoutForm> 
                : null}
                <Price>€{price}</Price>
                <button onClick={addToCart}>ADD TO CART</button>
                {added ? <p>PRODUCT ADDED TO CART</p> : null}
            </Info>
        </Container>
    )
}

export default Product;