import { useState } from 'react';
import styles from '../css/SideBarCesta.module.css'

import { LuX } from "react-icons/lu";
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
                        <section className={styles.basketArea}>
                            <div className={styles.emptyBasket}>
                            </div>
                        </section>
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