import Head from 'next/head';
import styled from 'styled-components';

//Components
import {Lander} from '../components/lander';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>SINNERS PRODIGY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lander/>
    </Container>
  )
}


const Container = styled.div`


`