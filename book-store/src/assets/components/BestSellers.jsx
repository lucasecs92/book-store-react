import styles from '../css/BestSellers.module.css';
import { useState, useEffect } from 'react';

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

    const [isNavigationEnabled, setIsNavigationEnabled] = useState(window.innerWidth > 1366);

    const books = [
        { id: 1, image: image1, title: 'Living Life in the Best Way', author: 'Amalia Santos', price: '$35.00' },
        { id: 2, image: image2, title: 'Lost in the Maze of Wonders', author: 'Third R.', price: '$40.00' },
        { id: 3, image: image3, title: 'Ways To Get Motivated, Avoid Procrastination, and Achieve Success.', author: 'Marc Suquetverd', price: '$38.00' },
        { id: 4, image: image4, title: 'I See You', author: 'Paula Arevalo', price: '$45.00' },
        { id: 5, image: image5, title: 'ASIAN Recipe Book', author: 'Chien-Shiung Wu', price: '$35.00' },
        { id: 6, image: image6, title: 'The Secret Garden of Eternity', author: 'Geana Yureese', price: '$34.00' },
        { id: 7, image: image7, title: 'A Guide to Baking Bread for Beginners', author: 'Chef Marie Curie', price: '$42.00' },
        { id: 8, image: image8, title: 'Life of The Wild', author: 'Sanchit Howdy', price: '$40.00' },
        { id: 9, image: image9, title: 'Birds Gonna be Happy', author: 'Timbur Hood', price: '$35.00' },
        { id: 10, image: image10, title: 'Living Alone', author: 'Alexandre Nero', price: '$44.00' },
    ];

    useEffect(() => {

        function handleResize(){
            
            if(window.innerWidth < 1255) {
                setSlidePerView(3);
            } else {
                setSlidePerView(4);
            }
            
            if(window.innerWidth < 1040) {
                setSlidePerView(2);
            }

            setIsNavigationEnabled(window.innerWidth < 1040);
            
            if(window.innerWidth < 803) {
                setSlidePerView(1); 
            }

        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <>
            <section className={styles.bestSellers}>
                <h3 className={styles.title}>Mais Vendidos</h3>

                <section className={styles.slideBook}>
                    <Swiper
                    slidesPerView={slidesPerView}
                    // pagination={{ clickable: true }}
                    navigation={isNavigationEnabled}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    >
                        
                        {books.map((book) => {
                            return (

                                <SwiperSlide key={book.id}>
                                    <section className={styles.inner}>
                                        <img
                                        src={book.image}
                                        alt={book.title}
                                        className={styles.slideImg}
                                        />
                                        <aside className={styles.slideBookInfo}>
                                            <h2 className={styles.slideBookTitle}>
                                               {book.title}
                                            </h2>
                                            <p className={styles.slideBookAutor}>
                                               {book.author}
                                            </p>
                                            <p className={styles.slideBookPrice}>
                                               {book.price}
                                            </p>
                                        </aside>
                                        <a href="#" className={styles.slideBookBtn} aria-label={`Comprar ${book.title}`}>COMPRAR</a>
                                    </section>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
            </section>
        </>
    )
}

export default BestSellers;