import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
import {getCollectionsByID} from '../../lib/shopify';
//Styles
import {Container, SlideContainer, Slide, AboutContainer, HighlightContainer, HighLight, Text, SocialsContainer} from './styles';

//Components
import Logo from '../../media/svg/logo.svg'

//SLIDESHOW
const SlideShow = ({image}) => {

    const [urls, setUrls] = React.useState([])

    console.log("images: " + image)
    React.useEffect(() => {
        if(urls.length <= 0 ){
            image.map(el => {
                setUrls(prevState => [...prevState, el.images[0].src])
            })
        }
    }, [])

    //<Image priority={true} src={urls[0]} layout="fill" objectFit="cover" ={30}/>


    return(
        <SlideContainer>
            <Carousel showThumbs={false} showStatus={false}>
                {urls ? urls.map(el => {
                    return <Slide><Image priority={true} src={el} layout="fill" objectFit="cover" quality={60}/></Slide>
                }): null}
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
const Higlights = ({image}) => {

    const [urls, setUrls] = React.useState([])

    React.useEffect(() => {
        if(urls.length <= 0 ){
            console.log(image)
            image.map(el => {
                setUrls(prevState => [...prevState, el.images[0].src])
            })
        }
    }, [])

    return (
        <HighlightContainer>
            {urls ? urls.map(el =>{
                return (
                <HighLight>
                    <Image priority={true} src={el} layout="fill" objectFit="cover" quality={60}/>
                </HighLight>
                )
            }) : null}
        </HighlightContainer>
    )
}

//SOCIAL


const HomeContent = ({items, community}) => {

    console.log(community);
    return (
    <Container>
        <SlideShow image={items}/>
        <About/>
        <Higlights image={community}/>
    </Container>
    )
}

export default HomeContent;