import React from 'react'
import {Container, Info, View, MainInfo, CheckoutForm, Price, Warn} from './styles';
import {CartContext} from '../../context/cartContext';
import ImageGallery from 'react-image-gallery';

const Product = ({product}) => {

    const [variant, setVariant] = React.useState(product.variants[0].id)
    const [price, setPrice] = React.useState(product.variants[0].price)
    const [size, setSize] = React.useState(product.variants[0].title)
    const [added, setAdded] = React.useState(false);
    const [thumbnail, setThumbnail] = React.useState(product.images[0].src);;
    const [images, setImages] = React.useState([])
    const [available, setAvailable] = React.useState(true)
    console.log(product);
    

    //CARTCONTEXT
    const {cart, setCart} = React.useContext(CartContext);

    const selectVariant = (e) => {
        setVariant(e.target.value);
        console.log(e.target.value);
        product.variants.map(el => {if(el.id === e.target.value){ setAvailable(el.available); setPrice(el.price); setSize(el.title)} else {null}});
    }

    const addToCart = () => {
        let p = [variant, price, product.title, thumbnail, size, product.handle, product.id];
        setCart([...cart, p]);
        setAdded(true);
        setTimeout(function(){ setAdded(false)}, 1000);
    }

    //Get images and create gallery
    React.useEffect(() => {
        if(images.length <= 0){
            product.images.map(el => {setImages(prevImages => [...prevImages, {original: el.src, thumbnail: el.src}])})
        }
        setAvailable(product.variants[0].available)
    }, [])

    return (
        <Container>
            <View>
                <ImageGallery 
                showPlayButton={false} 
                showFullscreenButton={true} 
                items={images}
                infinite={true}
                />
            </View>
            <Info>
                <MainInfo>
                    <h3>{product.title}</h3>
                    <sub>{product.productType ? product.productType : ""}</sub>
                    <p>
                        {product.descriptionHtml.length > 0 ? <div dangerouslySetInnerHTML={ {__html: product.descriptionHtml} }/> : product.description}
                    </p>
                </MainInfo>
                <Price>€{price}</Price>
                {product.variants.length > 1 ? 
                    <CheckoutForm>
                        <select onChange={e => {selectVariant(e)}}>
                            {product.variants.map(el => {
                                return <option key={el.id} value={el.id}>{el.title}</option>
                            })}
                        </select>
                    </CheckoutForm> 
                : null}
                <button onClick={() => {available ? addToCart() : null}}>{available ? "ADD TO CART" : "OUT OF STOCK"}</button>
                {added ? <Warn>PRODUCT ADDED TO CART</Warn> : null}
            </Info>
        </Container>
    )
}

export default Product;