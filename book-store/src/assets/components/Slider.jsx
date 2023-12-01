import { useState } from 'react';
import styles from '../css/Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";

import image1 from '../images/book1.jpg';
import image2 from '../images/book2.jpg';


const Slider = () => {

    const images = [ image1, image2, ];

    const titles = [
        'Life Of The Wild',
        'Birds Gonna Be Happy',
    ];

    const [bookTitle, setBookTitle] = useState(titles[0]);

    return (
        <>
            <section className={styles.slider}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    speed={800}
                    onSlideChange={(swiper) => {
                        const index = swiper.realIndex;
                        setBookTitle(titles[index]);
                    }}
                >t

                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <section className={styles.billboard}>
                                <aside className={styles.bannerTitle}>
                                    <h2>{bookTitle}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas culpa alias quis fuga accusamus, autem, accusantium id ad quibusdam placeat, quidem nulla.</p>
                                    <span className={styles.btnWrap}>
                                        <a className={styles.billboardBtn} href="#">
                                            <span>READ MORE</span>
                                            <FaArrowRightLong />
                                        </a>
                                    </span>
                                </aside>
                                <img
                                    src={image}
                                    alt={`slide ${index}`}
                                    className={styles.slideItem}
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