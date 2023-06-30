import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import S22 from "./s22.webp"
import Phone from "./PHONE.jpg"
import Xiami from "./xiami.jpg"

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
            <Carousel.Slide>
                <Image src={Phone} />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={S22} />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={Xiami} />
            </Carousel.Slide>
        </Carousel>
    );
}
export default Slide