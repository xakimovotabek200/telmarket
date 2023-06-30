import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

function Slide() {
    const autoplay = useRef(Autoplay({ delay: 2500 }));
    return (
        <Carousel
            className=' rounded-2xl border-2 border-solid border-red-600'
            maw={1220}
            loop={true}
            mx="auto"
            withIndicators
            height={500}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}
export default Slide