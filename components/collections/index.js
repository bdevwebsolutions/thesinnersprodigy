import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Item, Container, Grid, Title} from './styles';

export const Collection = ({items, title}) => {

    console.log(items);
    return (
    <Container>
        <Title>{title}</Title>
        <Grid>
            {items.sort((a,b) => {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }).reverse().map(el => {
                return (
                <Link href={`/item/${encodeURIComponent(el.handle)}/${encodeURIComponent(el.id)}`}>
                    <a>
                        <Item key={el.id}>
                            <div><Image priority={true} src={el.images[0].src} layout="fill" objectFit="cover"/></div>
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