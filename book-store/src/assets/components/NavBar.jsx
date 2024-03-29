import styles from '../css/NavBar.module.css';
import { useEffect, useRef, useState } from 'react';

import { Basket, MagnifyingGlass, User } from '@phosphor-icons/react';
import { PiBooksDuotone } from "react-icons/pi";
import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa';

import FormLogin from './FormLogin.jsx';
import SideBarCesta from './SideBarCesta.jsx';

import PropTypes from 'prop-types';

const NavBar = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [showDividingLineNav, setShowDividingLineNav] = useState(false);

    const handleRemoveItem = (itemToRemove) => {
        props.setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
    };

    const sidebarRef = useRef(null);

    const [showSideBarCesta, setShowSideBarCesta] = useState(false);
    const handleCartClick = () => {
        setShowSideBarCesta(!showSideBarCesta);
    };
     
    const [showLoginForm, setShowLoginForm] = useState(false);   
    const handleLoginClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSideBarCesta(false);
            }
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    const handleEscKey = (event) => {
        if (event.key === 'Escape') {
            setShowSideBarCesta(false);
        }
        if (event.key === 'Escape') {
            setShowLoginForm(false);
        }
    };

    useEffect(() => {
       
        document.addEventListener('keydown', handleEscKey);
 
        // Limpeza ao desmontar o componente
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    const handleNavigationClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <>
        <section className={styles.wrapNav}>
            <nav className={styles.navBarMain}>
                <section className={styles.navLeft}>
                    <a className={styles.navLogo} href="#">
                        <PiBooksDuotone/>Book store
                    </a>
                </section>

                <search className={styles.navSearchForm}>
                    <section className={styles.dropdown} ref={dropdownRef}>
                        <section className={styles.dropdownSelect} onClick={() => setIsOpen(!isOpen)}>
                            <span className={styles.select}>Todos</span>
                            <FaCaretDown/>
                        </section>

                        {isOpen && (
                        <section className={styles.dropdownList}>
                            <div className={styles.dropdownListItem}>Nome do livro</div>
                            <div className={styles.dropdownListItem}>Autor</div>
                            <div className={styles.dropdownListItem}>Título</div>
                            <div className={styles.dropdownListItem}>Editora</div>
                            <div className={styles.dropdownListItem}>Descrição</div>
                        </section>
                        )}
                    </section>
                        
                    <input
                        className={styles.searchField}
                        type="search"
                        placeholder="O que você está buscando?"
                    />

                    <button className={styles.searchBtn} type="submit">
                        <MagnifyingGlass/>
                    </button>
                </search>

                <nav className={styles.navRight}>
                    <ul className={styles.navRightUl}>

                        <li className={styles.navLogin} onClick={handleLoginClick}>
                            <aside><User/></aside>
                            <a href="#">Entrar</a>
                        </li>

                        <li className={styles.navCart} onClick={(event) => {event.preventDefault(); handleCartClick();}}>
                            <aside><Basket /></aside>
                            {props.cartItems.reduce((total, item) => total + item.quantity, 0) > 0 && 
                                <span className={styles.notification}>{props.cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                            }
                            <a href="#">Cesta</a>
                        </li>

                    </ul>
                </nav>
            </nav>        

            <menu className={styles.hamburguerMenu} onClick={() => {
                setIsMenuOpen(prevState => !prevState);
                setShowDividingLineNav(prevState => !prevState);
            }}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </menu> 

            <nav className={`${styles.dividingLineNav} ${showDividingLineNav ? styles.show : ''}`}>
                <ul className={styles.dividingLineNavUl}>
                    <li onClick={(event) => handleNavigationClick(event, 'sliderHome')}>
                        <a href="#sliderHome">Home</a>
                    </li>
                    <li onClick={(event) => handleNavigationClick(event, 'release')}>
                        <a href="#release">Lançamentos</a>
                    </li>
                    <li onClick={(event) => handleNavigationClick(event, 'newsletter')}>
                        <a href="#newsletter">Inscreva-se</a>
                    </li>
                    <li onClick={(event) => handleNavigationClick(event, 'bestSellers')}>
                        <a href="#bestSellers">Mais Vendidos</a>
                    </li>
                    <li onClick={(event) => handleNavigationClick(event, 'downloadApp')}>
                        <a href="#downloadApp">Download App</a>
                    </li>
                </ul>
            </nav>
        </section>

        {showLoginForm && (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // para adicionar um fundo escurecido
                zIndex: 9999, // para garantir que o FormLogin apareça por cima de todos os outros componentes
            }}>
                <FormLogin />
                <section className={styles.closeLoginBtn} onClick={handleLoginClick}>
                    <FaTimes/>
                </section>
            </div>
        )}

        {showSideBarCesta && (
            <div ref={sidebarRef} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // para adicionar um fundo escurecido
                zIndex: 9999, // para garantir que o SideBarCesta apareça por cima de todos os outros componentes
            }}>
                <SideBarCesta 
                    onClose={handleCartClick} 
                    setCartItems={props.setCartItems} 
                    cartItems={props.cartItems} 
                    onRemoveItem={handleRemoveItem}
                />
                <section className={styles.closeLoginBtn} onClick={handleCartClick}>
                    <FaTimes/>
                </section>
            </div>
        )}
      </>
    )
}

NavBar.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default NavBar;