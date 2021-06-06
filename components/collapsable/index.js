import React, { useEffect, useState } from 'react'
import Image from 'next/image';


//Components
import {Container, Sub, List, Preview} from './styles';


//DATA FETCHING
import { getCollections } from '../../lib/shopify';
import Link from 'next/link';
import { ItemsContext } from '../../context/itemsContext';


//FETCH IMAGES FOR THE MENU


const Collapsable = ({visible, setVisible}) => {

        //IMAGES
        const [URLS, setURLS] = useState([]);

        //CONTEXT
        const {initialData} = React.useContext(ItemsContext);

        useEffect(async () => {
            let d = initialData[0];
            let urls = d.map(el => {
                return el.images[0].src;
            })
            setURLS(urls)
        }, [])
        //--------------

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
                <Sub>
                    <List>
                        <p>NEW ARRIVALS</p>
                        <ul>
                            {collections.new.map(el => {
                                return <Link 
                                            key={el.handle} 
                                            href={`/collection/${encodeURIComponent(el.title)}/${encodeURIComponent(el.id)}`}>
                                                <li onClick={() => {setVisible(!visible)}}>{el.description}</li>
                                        </Link>
                            })}
                        </ul>
                    </List>
                    <Preview>
                        {URLS.length > 0 ? <Image src={URLS[0]} layout="fill" objectFit="cover"/> : "LOADING..."}
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
                        {URLS.length > 0 ? <Image src={URLS[1]} layout="fill" objectFit="cover"/> : "LOADING..."}
                    </Preview>
                </Sub>
                <Sub>
                    <List>
                        <p>WOMAN</p>
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
                        {URLS.length > 0 ? <Image src={URLS[2]} layout="fill" objectFit="cover"/> : "LOADING..."}
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
                        {URLS.length > 0 ? <Image src={URLS[3]} layout="fill" objectFit="cover"/> : "LOADING..."}
                    </Preview>
                </Sub>
            </Container>
        )

}

export default Collapsable;