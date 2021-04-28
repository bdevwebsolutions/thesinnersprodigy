import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
//Styles
import {Container, SlideContainer, Slide, AboutContainer, HighlightContainer, HighLight, Text, SocialsContainer} from './styles';

//Components
import Logo from '../../media/svg/logo.svg'

//SLIDESHOW
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
                    <Image priority={true} src={urls[0]} layout="fill" objectFit="cover" quality={1}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[1]} layout="fill" objectFit="cover" quality={1}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[2]} layout="fill" objectFit="cover" quality={1}/>
                </Slide>
                <Slide>
                    <Image priority={true} src={urls[3]} layout="fill" objectFit="cover" quality={1}/>
                </Slide>
            </Carousel>
        </SlideContainer>
    )
}


//ABOUT
const About = () => {
    return (
        <AboutContainer>
            <h2>About The Sinners Prodigy</h2>
            <h3>" We're all born as saints but we're all going down as sinners. "</h3>
            <p>The Sinners Prodigy is created in the year 2020, also known as the year of the chaos.<br></br> With this brand we're determined to deliver a brand new streetstyle to people worldwide.<br></br> Our store offers a collection of quality & exclusive pieces specially made for the few.</p>
            <Logo/>
        </AboutContainer>
    )
}

//Higlihhted pictures
const Higlights = () => {
    return (
        <HighlightContainer>
            <HighLight>
                <Image priority={true} src={'/pictures/highlight/1.jpg'} layout="fill" objectFit="cover" quality={1}/>
                
            </HighLight>
            <HighLight>
                <Image priority={true} src={'/pictures/highlight/2.jpg'} layout="fill" objectFit="cover" quality={1}/>
                
            </HighLight>
            <HighLight>
                <Image priority={true} src={'/pictures/highlight/3.jpg'} layout="fill" objectFit="cover" quality={1}/>
            </HighLight>
            <Text><p>GREY CHAOS HOODIE</p><span>€50.00</span></Text>
            <Text><p>BLACK CHAOS HOODIE</p><span>€50.00</span></Text>
            <Text><p>PINK CHAOS HOODIE</p><span>€50.00</span></Text>
        </HighlightContainer>
    )
}

//SOCIAL
const Socials = () => {
    return(
        <SocialsContainer>
            <p>socials</p>
            <p>become a promoter</p>
            <p>contact</p>
            <p>delivery and return policy</p>
        </SocialsContainer>
    )
}


const HomeContent = () => {
    return (
    <Container>
        <SlideShow/>
        <About/>
        <Higlights/>
        <Socials/>
    </Container>
    )
}

export default HomeContent;