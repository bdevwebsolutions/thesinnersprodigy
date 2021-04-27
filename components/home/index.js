import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
//Styles
import {Container, SlideContainer, Slide} from './styles';

//Components
const SlideShow = () => {

    const [urls, setUrls] = React.useState([
        '/pictures/slide/1.jpg',
        '/pictures/slide/2.jpg',
        '/pictures/slide/3.jpg',
        '/pictures/slide/4.jpg',
    ])


    //<Image priority={true} src={urls[0]} layout="fill" objectFit="cover" quality={30}/>


    return(
        <SlideContainer>
            <Carousel showThumbs={false} showStatus={false}>
                <Slide>
                    <Image priority={true} src={urls[0]} layout="fill" objectFit="cover" quality={30}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[1]} layout="fill" objectFit="cover" quality={30}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[2]} layout="fill" objectFit="cover" quality={30}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[3]} layout="fill" objectFit="cover" quality={30}/>
                </Slide>
            </Carousel>
        </SlideContainer>
    )
}

const About = () => {
    return <div>p</div>
}


const HomeContent = () => {
    return (
    <Container>
        <SlideShow/>
        <About/>
    </Container>
    )
}

export default HomeContent;