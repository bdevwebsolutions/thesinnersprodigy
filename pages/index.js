import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head';
import {useRouter} from 'next/router';
import styled from 'styled-components';

//Components
import { Lander } from '../components/lander';
import { Loader } from '../components/loader';
import { ItemsContext } from '../context/itemsContext';
import { getCollections } from '../lib/shopify';


export default function Home() {

  const [loading, setLoading] = useState(true);
  const {fetchInitialData} = useContext(ItemsContext);
  const router = useRouter();


  //TEMP REDIRECT
  useEffect(async() => {
    let res = await fetchInitialData();
    if(res){
      router.push('/home');
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>THE SINNERS PRODIGY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loader clear={setLoading}/> : ""}
    </Container>
  )
}


const Container = styled.div`


`