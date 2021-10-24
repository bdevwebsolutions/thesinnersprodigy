import Image from 'next/image';
import React from 'react'
import Masonry from 'react-masonry-css'
import {ImageContainer} from './styles';

const MediaContent = ({media}) => {


    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const [urls, setUrls] = React.useState([]);

    React.useEffect(() => {
        if(urls.length <= 0 ){
            media.images.map(el => {
                setUrls(prevState => [...prevState, el.src])
            })
        }
    }, [])

    return (
        <div>
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {urls.length > 0 ? urls.map((el, index) => {
                    return <ImageContainer><Image priority={true} src={el} layout="fill" objectFit="cover" quality={60}/></ImageContainer>
                }) : null}
            </Masonry>
        </div>
    )


}

export default MediaContent;