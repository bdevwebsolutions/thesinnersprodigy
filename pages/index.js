import React, {useEffect, useState} from 'react'
import Head from 'next/head';
import styled from 'styled-components';

//Components
import {Lander} from '../components/lander';
import { Lander_2 } from '../components/lander_2';
import { Loader } from '../components/loader';

export default function Home() {

  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Head>
        <title>THE SINNERS PRODIGY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loader clear={setLoading}/> : <Lander/>}
    </Container>
  )
}


const Container = styled.div`


`