import styles from '../css/Release.module.css';
import { useState } from 'react';

import { LuPlusCircle } from "react-icons/lu";
import PropTypes from 'prop-types';

import releaseBook1 from '../images/release-book1.jpg';
import releaseBook2 from '../images/release-book2.jpg';
import releaseBook3 from '../images/release-book3.jpg';
import releaseBook4 from '../images/release-book4.jpg';
import releaseBook5 from '../images/release-book5.jpg';
import releaseBook6 from '../images/release-book6.jpg';
import releaseBook7 from '../images/release-book7.jpg';
import releaseBook8 from '../images/release-book8.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';

const Release = (props) => {

    
    const books = [
        { id: 1, image: releaseBook1, title: 'The Gestures of LOVE', author: 'Jane Goodall', price: 'R$24.00' },
        { id: 2, image: releaseBook2, title: 'The Garden', author: 'Wolfgang Ernst Pauli', price: 'R$35.00' },
        { id: 3, image: releaseBook3, title: 'Watsons Family RECIPES', author: 'Doors Publishing', price: 'R$27.00' },
        { id: 4, image: releaseBook4, title: 'TRAVEL around the world', author: 'Jonathan B. Well', price: 'R$30.00' },
        { id: 5, image: releaseBook5, title: 'The Basics of Business Management', author: 'Hugh A. Hanks', price: 'R$28.00' },
        { id: 6, image: releaseBook6, title: 'The Complete SMM Guide', author: 'Michael Faraday', price: 'R$32.00' },
        { id: 7, image: releaseBook7, title: 'Veggies & Greens Cookbook', author: 'Chef J. Hudson', price: 'R$45.00' },
        { id: 8, image: releaseBook8, title: 'Minimalist Art', author: 'Niels Bohr', price: 'R$40.00' },
    ]

    const [displayCount, setDisplayCount] = useState(books.length / 2);
    // const [displayCount, setDisplayCount] = useState(Math.ceil(books.length / 2));
    const [hover, setHover] = useState({});

    return (
        <>
            <section className={styles.releaseContainer}>
                <h3 className={styles.title}>Lançamentos</h3>
                <section className={styles.releaseBooks}>
                    {books.slice(0, displayCount).map((book) => (
                            <section key={book.id} className={styles.inner}>
                                <img
                                src={book.image}
                                alt={book.title}
                                className={styles.releaseBookImg}
                                />
                                <aside className={styles.releaseBookInfo}>
                                    <h2 className={styles.releaseBookTitle}>{book.title}</h2>
                                    <p className={styles.releaseBookAutor}>{book.author}</p>
                                    <p className={styles.releaseBookPrice}>{book.price}</p>
                                </aside>
            
                                <a href="#" className={styles.releaseBookBtn} 
                                onMouseEnter={() => setHover(prevHover => ({ ...prevHover, [book.id]: true }))} 
                                onMouseLeave={() => setHover(prevHover => ({ ...prevHover, [book.id]: false }))} 
                                onClick={(event) => {
                                    event.preventDefault(); 
                                    props.addToCart(book);
                                }}>
                                {hover[book.id] ? <LuPlusCircle/> : "COMPRAR"}
                                </a>
                            </section>
                    ))}                            
                </section>

                {displayCount < books.length && (
                    <span className={styles.viewMoreWrap} onClick={() => setDisplayCount(books.length)}>
                        <p>View More</p>
                        <FaArrowRightLong/>
                    </span>
                )}

            </section>
        </>   
    )
}

Release.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default Release;