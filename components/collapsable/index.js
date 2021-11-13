import React, { Suspense, useEffect, useState } from 'react'
import Image from 'next/image';


//Components
import {Container, Routing, List, Images, MobileButton} from './styles';


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

        //COLLECTIONS FOR ROUTING
        const [collections, setCollections] = useState({
            men: [], 
            woman: [], 
            accessories: [], 
            new: [],
            sale: [],
            all: [],
            collections: [],
        });

        useEffect(async () => {
            let d = await getCollections();

            //SPLIT INTO SUB
            let res = {
                men: [], 
                woman: [], 
                accessories: [], 
                new: [],
                sale: [],
                all: [],
                collections: [],
            };

            console.log(d);

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
                } else if (el.title.includes('Sale')){
                    res.sale.push(el);
                } else if (el.title.includes('All')){
                    res.all.push(el);
                } else if (el.title.includes('Collections')){
                    res.collections.push(el);
                }
            })

            setCollections(res);

        }, [])


        return (
            <Container trigger={visible}>
                {showMobileButton ? <MobileButton onClick={() => {setVisible(false)}}>CLOSE</MobileButton> : null}
                <Routing>
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
                    <List>
                        <p>SALE</p>
                        <ul>
                            {collections.sale.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <List>
                        <p>ALL</p>
                        <ul>
                            {collections.all.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <List>
                        <p>COLLECTIONS</p>
                        <ul>
                            {collections.collections.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                </Routing>
                <Images>
                    <div>{URLS.length > 0 ? <Image priority={true} src={URLS[0] !== undefined ? URLS[0] : ""} quality={50} layout="fill" objectFit="cover"/> : ""}</div>
                    <div>{URLS.length > 1 ? <Image priority={true} src={URLS[1] !== undefined ? URLS[1] : ""} quality={50} layout="fill" objectFit="cover"/> : ""}</div>
                    <div>{URLS.length > 2 ? <Image priority={true} src={URLS[2] !== undefined ? URLS[2] : ""} quality={50} layout="fill" objectFit="cover"/> : ""}</div>
                    <div>{URLS.length > 3 ? <Image priority={true} src={URLS[3] !== undefined ? URLS[3] : ""} quality={50} layout="fill" objectFit="cover"/> : ""}</div>
                </Images>
            </Container>
        )

}

export default Collapsable;