import styles from '../css/NavBar.module.css';
import { useEffect, useRef, useState } from 'react';

import { Basket, MagnifyingGlass, User } from '@phosphor-icons/react';
import { PiBooksDuotone } from "react-icons/pi";
import FormLogin from './FormLogin.jsx';
import { FaCaretDown, FaTimes } from 'react-icons/fa';
import SideBarCesta from './SideBarCesta.jsx';

const NavBar = () => {

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

    return (
      <>
        <section className={styles.wrapNav}>
            <nav className={styles.navBarMain}>
                <section className={styles.navLeft}>
                    <a className={styles.navLogo} href="#">
                        <PiBooksDuotone/>Book store
                    </a>
                </section>

                <form className={styles.navSearchForm}>
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
                        type="text"
                        placeholder="O que você está buscando?"
                    />

                    <button className={styles.searchBtn} type="submit">
                        <MagnifyingGlass/>
                    </button>
                </form>

                <nav className={styles.navRight}>
                    <ul className={styles.navRightUl}>
                        <li className={styles.navLogin} onClick={handleLoginClick}>
                            <aside><User/></aside>
                            <a href="#">Entrar</a>
                        </li>
                        <li className={styles.navCart} onClick={handleCartClick}>
                            <aside><Basket /></aside>
                            <a href="#">Cesta</a>
                        </li>
                    </ul>
                </nav>
            </nav>

            <nav className={styles.dividingLineNav}>
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
                <SideBarCesta onClose={handleCartClick}/>
                <section className={styles.closeLoginBtn} onClick={handleCartClick}>
                    <FaTimes/>
                </section>
            </div>
        )}
      </>
    )
}

export default NavBar;