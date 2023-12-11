import { useState } from 'react';
import styles from '../css/SideBarCesta.module.css'

import { LuShoppingBasket, LuX } from "react-icons/lu";
import PropTypes from 'prop-types';

const SideBarCesta = ({ onClose }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    return isOpen ? (
        <>
            <section className={styles.basketContainer}>
                <section className={styles.basketContainerSecond}>
                    <section className={styles.basketContainerThird}>
                        <header className={styles.basketHeader}>
                            <div className={styles.titleHeader}>
                                <h3>Minha Cesta</h3>
                            </div>
                            <div className={styles.closeBtn} onClick={handleCloseClick}>
                                <LuX />
                            </div>
                        </header>
                        <main className={styles.basketArea}>
                            
                            <section className={styles.emptyBasket}>
                                <div className={styles.basketIcon}>
                                    <LuShoppingBasket/>
                                </div>
                                <div className={styles.emptyText}>
                                    <p>Sua cesta está vazia</p>
                                </div>
                            </section>
                        </main>
                        <footer className={styles.basketFooter}>

                        </footer>
                    </section>
                </section>
            </section>
        </>
    ) : null;
} 

SideBarCesta.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default SideBarCesta; 