import styles from '../css/NavBar.module.css';
import { useEffect, useState } from 'react';

import { Basket, MagnifyingGlass, User } from '@phosphor-icons/react';
import { PiBooksDuotone } from "react-icons/pi";
import FormLogin from './FormLogin.jsx';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(!showLoginForm);
    };
 
    const handleEscKey = (event) => {
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
                    <select className={styles.dropdownMenu}>
                        <option className={styles.dropdownItem} value="Todos">Todos</option>
                        <option className={styles.dropdownItem} value="Nome do livro">Nome do livro</option>
                        <option className={styles.dropdownItem} value="Autor">Autor</option>
                        <option className={styles.dropdownItem}value="Titulo">Título</option>
                        <option className={styles.dropdownItem} value="Editora">Editora</option>
                        <option className={styles.dropdownItem} value="Descrição">Descrição</option>
                    </select>
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
                            <a href="#">Login</a>
                        </li>
                        <li className={styles.navCart}>
                            <aside><Basket /></aside>
                            <a href="#">Cart</a>
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
      </>
    )
}

export default NavBar;