import React, { useEffect, useState } from 'react'
import Image from 'next/image';


//Components
import {Container, Sub, List, Preview, MobileButton} from './styles';


//DATA FETCHING
import { getCollections } from '../../lib/shopify';
import Link from 'next/link';
import { ItemsContext } from '../../context/itemsContext';
import { useRouter } from 'next/router';


//FETCH IMAGES FOR THE MENU


const Collapsable = ({visible, setVisible}) => {

        //IMAGES
        const [URLS, setURLS] = useState([]);

        //Mobile button
        const [showMobileButton, setShowMobileButton] = useState(false);

        //CONTEXT
        const {initialData} = React.useContext(ItemsContext);

        //router
        const router = useRouter();

        useEffect(() => {
            //Images
            let d = initialData[0];
            let urls = d.images.map((el) => {
                return el.src;
            })
            setURLS(urls)

            //mobilebutton
            if(document.documentElement.clientWidth <= 720){
                setShowMobileButton(true)
            }
        }, [])
        //--------------

        //Redirect on image click
        const redirectOnImageClick = (category) => {
            router.push(`/collection/${encodeURIComponent(category[0].handle)}/${encodeURIComponent(category[0].id)}`)
            setVisible(false)
        }

        //COLLECTIONS FOR ROUTING
        const [collections, setCollections] = useState({men: [], woman: [], accessories: [], new: []});

        useEffect(async () => {
            let d = await getCollections();
            
            //SPLIT INTO SUB
            let res = {men: [], woman: [], accessories: [], new: []};

            d.map(el => {
                if(el.handle === "nav"){
                    null
                } else if (el.title.includes('Men')){
                    res.men.push(el)
                } else if (el.title.includes('Woman')){
                    res.woman.push(el)
                } else if (el.title.includes('Accessories')){
                    res.accessories.push(el)
                } else if (el.title.includes('New')){
                    res.new.push(el);
                }
            })

            setCollections(res);

        }, [])


        return (
            <Container trigger={visible}>
                {showMobileButton ? <MobileButton onClick={() => {setVisible(false)}}>CLOSE</MobileButton> : null}
                <Sub>
                    <List>
                        <p>NEW ARRIVALS</p>
                        <ul>
                            {collections.new.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <Preview>
                        {URLS.length > 0 ? <Image onClick={() => {redirectOnImageClick(collections.new)}} src={URLS[0] !== undefined ? URLS[0] : ""} layout="fill" objectFit="cover"/> : ""}
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>MEN</p>
                        <ul>
                        {collections.men.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <Preview>
                        {URLS.length > 1 ? <Image onClick={() => {redirectOnImageClick(collections.men)}} src={URLS[1] !== undefined ? URLS[1] : ""} layout="fill" objectFit="cover"/> : ""}
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>WOMEN</p>
                        <ul>
                            {collections.woman.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <Preview>
                        {URLS.length > 2 ? <Image onClick={() => {redirectOnImageClick(collections.woman)}} src={URLS[2] !== undefined ? URLS[2] : ""} layout="fill" objectFit="cover"/> : ""}
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>ACCESSORIES</p>
                        <ul>
                        {collections.accessories.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                        })}
                        </ul>
                    </List>
                    <Preview>
                        {URLS.length > 3 ? <Image onClick={() => {redirectOnImageClick(collections.accessories)}} src={URLS[3] !== undefined ? URLS[3] : ""} layout="fill" objectFit="cover"/> : ""}
                    </Preview>
                </Sub>
            </Container>
        )

}

export default Collapsable;