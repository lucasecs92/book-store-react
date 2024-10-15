import '../styles/Slider.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
// import { EffectFade } from 'swiper/modules';

import image1 from '../img/book8.jpg';
import image2 from '../img/book9.jpg';

const Slider = () => {

    const images = [ image1, image2, ];

    const titles = [
        'Life Of The Wild',
        'Birds Gonna Be Happy',
    ];

    const [bookTitle, setBookTitle] = useState(titles[0]);

    return (
        <>
            <section className="slider" id='sliderHome'>
                <Swiper
                    // modules={[EffectFade]}
                    // effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={false}
                    loop={true}
                    speed={800}
                    onSlideChange={(swiper) => {
                        const index = swiper.realIndex;
                        setBookTitle(titles[index]);
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >

                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <section className="billboard">
                                <aside className="banner-info">
                                    <h2>{bookTitle}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas culpa alias quis fuga accusamus, autem, accusantium id ad quibusdam placeat, quidem nulla.</p>
                                    <span className="btn-wrap">
                                        <a className="billboard-btn" href="#">
                                            <span>READ MORE</span>
                                            <FaArrowRightLong />
                                        </a>
                                    </span>
                                </aside>
                                <img
                                    src={image}
                                    alt={`slide ${index}`}
                                    className="carousel-img"
                                />
                            </section>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </section>
        </>
    )
}

export default Slider;