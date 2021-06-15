import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
//Styles
import {Container, SlideContainer, Slide, AboutContainer, HighlightContainer, HighLight, Text, SocialsContainer} from './styles';

//Components
import Logo from '../../media/svg/logo.svg'
import { useRouter } from 'next/router';

//SLIDESHOW
const SlideShow = ({image}) => {

    const [urls, setUrls] = React.useState([])
    React.useEffect(() => {
        if(urls.length <= 0 ){
            image.images.map(el => {
                setUrls(prevState => [...prevState, el.src])
            })
        }
    }, [])

    const router = useRouter()

    //<Image priority={true} src={urls[0]} layout="fill" objectFit="cover" ={30}/>

    const handleBuyButton = () => {
        router.push('/collection/New%20arrival%20Tracksuits/Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MDMwNTU5MTQ1OQ%3D%3D')
    }

    return(
        <SlideContainer>
            <Carousel emulateTouch={true} showThumbs={false} showStatus={false}>
                {urls ? urls.map((el, index) => {
                    return <Slide><p onClick={ urls.length > 0 ? handleBuyButton : null}>SHOP NOW</p><Image priority={true} src={el} layout="fill" objectFit="cover" quality={60}/></Slide>
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

//Higlihhted pictures - COMMUNITY
const Higlights = ({image}) => {

    const [urls, setUrls] = React.useState([])

    React.useEffect(() => {
        if(urls.length <= 0 ){
            
            image.images.map(el => {
                setUrls(prevState => [...prevState, el.src])
            })
        }
    }, [])

    return (
        <HighlightContainer amount={urls.length}>
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

    return (
    <Container>
        <SlideShow image={items}/>
        <About/>
        <Higlights image={community}/>
    </Container>
    )
}

export default HomeContent;