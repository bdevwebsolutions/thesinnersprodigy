import React, {useEffect, useState} from 'react'
import Head from 'next/head';
import {useRouter} from 'next/router';
import styled from 'styled-components';

//Components
import { Lander } from '../components/lander';
import { Loader } from '../components/loader';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //TEMP REDIRECT
  useEffect(() => {
    if(!loading){
      router.push('home')
    }
  }, [loading])

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