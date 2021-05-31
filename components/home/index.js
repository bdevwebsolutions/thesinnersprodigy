import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
//Styles
import {Container, SlideContainer, Slide, AboutContainer, HighlightContainer, HighLight, Text, SocialsContainer} from './styles';

//Components
import Logo from '../../media/svg/logo.svg'

//SLIDESHOW
const SlideShow = () => {

    


    //<Image priority={true} src={urls[0]} layout="fill" objectFit="cover" quality={30}/>


    return(
        <SlideContainer>
            <Carousel showThumbs={false} showStatus={false}>
                <Slide>
                    {/*<Image priority={true} src={urls[0]} layout="fill" objectFit="cover" quality={1}/>*/}
                </Slide>
                <Slide>
                IMAGE
                </Slide>
                <Slide>
                IMAGE
                </Slide>
                <Slide>
                IMAGE
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
                {/*<Image priority={true} src={'/pictures/highlight/1.jpg'} layout="fill" objectFit="cover" quality={1}/>*/}
                
            </HighLight>
            <HighLight>
                IMAGE
                
            </HighLight>
            <HighLight>
                IMAGE
            </HighLight>
            <Text><p>GREY CHAOS HOODIE</p><span>€50.00</span></Text>
            <Text><p>BLACK CHAOS HOODIE</p><span>€50.00</span></Text>
            <Text><p>PINK CHAOS HOODIE</p><span>€50.00</span></Text>
        </HighlightContainer>
    )
}

//SOCIAL


const HomeContent = () => {
    return (
    <Container>
        <SlideShow/>
        <About/>
        <Higlights/>
    </Container>
    )
}

export default HomeContent;