import React from 'react'
import {Container, Info, View, MainInfo, CheckoutForm, Price, Warn} from './styles';
import {CartContext} from '../../context/cartContext';
import ImageGallery from 'react-image-gallery';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';

const Product = ({product}) => {

    const [variant, setVariant] = React.useState(product.variants[0].id)
    const [price, setPrice] = React.useState(product.variants[0].price)
    const [title, setTitle] = React.useState(product.variants[0].title)
    const [added, setAdded] = React.useState(false);
    const [images, setImages] = React.useState([])
    console.log(product);

    //CARTCONTEXT
    const {cart, setCart} = React.useContext(CartContext);

    const selectVariant = (e) => {
        setVariant(e.target.value);
        product.variants.map(el => {if(el.id === e.target.value){ setPrice(el.price); setTitle(el.title)} else {null}});
    }

    const addToCart = () => {
        let p = [variant, price, product.title]
        setCart([...cart, p]);
        setAdded(true);
    }

    //Get images and create gallery
    React.useEffect(() => {
        if(images.length <= 0){
            product.images.map(el => {setImages(prevImages => [...prevImages, {original: el.src, thumbnail: el.src}])})
        }
    }, [])

    return (
        <Container>
            <View>
                <ImageGallery  
                showPlayButton={false} 
                showFullscreenButton={false} 
                items={images}
                infinite={false}
                />
            </View>
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
                {added ? <Warn>PRODUCT ADDED TO CART</Warn> : null}
            </Info>
        </Container>
    )
}

export default Product;