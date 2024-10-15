import '../styles/Release.css';
import { useState } from 'react';
import { LuPlusCircle } from "react-icons/lu";
import { FaArrowRightLong } from 'react-icons/fa6';
import PropTypes from 'prop-types';

import releaseBook1 from '../img/release-book1.jpg';
import releaseBook2 from '../img/release-book2.jpg';
import releaseBook3 from '../img/release-book3.jpg';
import releaseBook4 from '../img/release-book4.jpg';
import releaseBook5 from '../img/release-book5.jpg';
import releaseBook6 from '../img/release-book6.jpg';
import releaseBook7 from '../img/release-book7.jpg';
import releaseBook8 from '../img/release-book8.jpg';

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
            <section className="release-container" id='release'>
                <h3 className="release-title">Lançamentos</h3>
                <section className="release-books">
                    {books.slice(0, displayCount).map((book) => (
                            <section key={book.id} className="inner">
                                <img
                                src={book.image}
                                alt={book.title}
                                className="release-book-img"
                                />
                                <aside className="release-book-info">
                                    <h2 className="release-book-title">{book.title}</h2>
                                    <p className="release-book-autor">{book.author}</p>
                                    <p className="release-book-price">{book.price}</p>
                                </aside>
            
                                <a href="#" className="release-book-btn" 
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
                    <span className="view-more-wrap" onClick={() => setDisplayCount(books.length)}>
                        <div className="view-more-wrap-wrap">
                            <p>View More</p>
                            <FaArrowRightLong className="arrow-icon"/>
                        </div>
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