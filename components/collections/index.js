import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';
import {Item, Container, Grid, Title} from './styles';

export const Collection = ({items, title}) => {
    return (
    <Container>
        <Title>{title}</Title>
        <Grid>
            {items.map(el => {
                return (
                <Link href={`/item/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                    <a>
                        <Item key={el.id}>
                            <div><Image src={el.images[0].src} layout="fill" objectFit="cover"/></div>
                            <p>{el.title}</p>
                        </Item>
                    </a>
                </Link>
                )
            })}
        </Grid>
    </Container>
    )

}

export const NoItem = () => {
    return  (
    <Container>
        <Title>NO PRODUCTS ARE AVAILABLE IN THIS CATEGORY</Title>
    </Container>
    )
}