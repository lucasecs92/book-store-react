// import { useState, useEffect, useRef } from 'react';
// import { motion } from "framer-motion";
import { useState } from 'react';
import styles from '../css/BestSellers.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import image1 from '../images/book1.jpg';
import image2 from '../images/book2.jpg';
import image3 from '../images/book3.jpg';
import image4 from '../images/book4.jpg';
import image5 from '../images/book5.jpg';
import image6 from '../images/book6.jpg';
import image7 from '../images/book7.jpg';
import image8 from '../images/book8.jpg';
import image9 from '../images/book9.jpg';
import image10 from '../images/book10.jpg';


const BestSellers = () => {

    const [slidesPerView, setSlidePerView] = useState(4);

    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];
    
    // const carousel = useRef();
    // const [width, setWidth] = useState(0);

    // useEffect( () => {
    //     console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    //     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    // }, [])

    return (
        <>
            <section className={styles.bestSellers}>
                <h3 className={styles.title}>Mais Vendidos</h3>

                <section className={styles.slideBook}>
                    <Swiper
                    slidesPerView={slidesPerView}
                    // pagination={{ clickable: true }}
                    navigation
                    >
                        {images.map( (item, index) => {
                            return (

                                <SwiperSlide key={index}>

                                    <section className={styles.inner}>
                                        <img
                                        src={item}
                                        alt="Slider"
                                        className={styles.slideImg}
                                        />
                                        <aside className={styles.slideBookInfo}>
                                            <h2 className={styles.slideBookTitle}>
                                                Titulo
                                            </h2>
                                            <p className={styles.slideBookAutor}>
                                                Autor
                                            </p>
                                        </aside>
                                        <a href="#" className={styles.slideBookBtn}>COMPRAR</a>
                                    </section>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
            </section>
          {/* <h3>Mais Vendidos</h3>
          <section className={styles.bestSellers}>

                <motion.div className={styles.carousel} ref={carousel} whileTap={{ cursor: "grabbing" }}>

                    <motion.div 
                    className={styles.inner} 
                    drag={'x'}
                    dragConstraints={{ right: 0, left: - width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                    >

                        {images.map(image => (
                            <motion.div className={styles.item} key={image}>
                                <img src={image} alt="Texto alt" />
                            </motion.div>
                        ))}

                    </motion.div>

                </motion.div>

          </section> */}
        </>
    )
}

export default BestSellers;