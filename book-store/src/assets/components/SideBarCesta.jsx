import { useState } from 'react';
import styles from '../css/SideBarCesta.module.css'

// import { LuShoppingBasket, LuX } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import PropTypes from 'prop-types';

const SideBarCesta = ({ onClose, cartItems, onRemoveItem }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    const handleRemoveClick = (event, item) => {
        event.preventDefault();
        onRemoveItem(item);
    };

    return isOpen ? (
        <>
            <section className={styles.basketContainer}>
                <section className={styles.basketContainerSecond}>
                        <header className={styles.basketHeader}>
                            <div className={styles.titleHeader}>
                                <h3>Minha Cesta</h3>
                            </div>
                            <div className={styles.closeHeaderBtn} onClick={handleCloseClick}>
                                <LuX />
                            </div>
                        </header>
                        <main className={styles.basketItems}>

                            <section className={styles.basketItemBook}>
                                <img 
                                    src="#" 
                                    alt="IMAGEM"
                                    className={styles.basketItemImg} 
                                />
                                <div className={styles.basketInfoProduto}>
                                    <div className={styles.basketInfoWrap}>
                                        <p className={styles.produtoTitle}>Titulo do livro</p>
                                        <a className={styles.deleteItem} href="#" >Excluir</a>
                                    </div>
                                    <div className={styles.quantidadeProduto}>
                                        <span className={styles.basketAddRemove}>
                                            <a href="#" className={styles.quantidadeMinus}>-</a>
                                            <input className={styles.quantidadeNumber} value={1}/>
                                            <a href="#" className={styles.quantidadePlus}>+</a>
                                        </span>
                                        <span className={styles.valor}>
                                            <p>R$0,00</p>
                                        </span>
                                    </div>
                                </div>

                            </section>

                            {cartItems.map((item, index) => (
                                <section className={styles.basketItemBook} key={index}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className={styles.basketItemImg} 
                                    />
                                    <div className={styles.basketInfoProduto}>
                                        <div className={styles.basketInfoWrap}>
                                            <p className={styles.produtoTitle}>{item.title}</p>
                                            <a 
                                            className={styles.deleteItem} 
                                            href="#"
                                            onClick={(event) => handleRemoveClick(event, item)}
                                            >
                                                Excluir
                                            </a>
                                        </div>
                                        <div className={styles.quantidadeProduto}>
                                            <span className={styles.basketAddRemove}>
                                                <a href="#" className={styles.quantidadeMinus}>-</a>
                                                <input className={styles.quantidadeNumber} value={1}/>
                                                <a href="#" className={styles.quantidadePlus}>+</a>
                                            </span>
                                            <span className={styles.valor}>
                                                <p>{item.price}</p>
                                            </span>
                                        </div>
                                    </div>

                                </section>                               
                            ))}

{/*                         MODELO
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                </div>
                            ))} */}

                            
                            {/* <section className={styles.emptyBasket}>
                                <div className={styles.basketIcon}>
                                    <LuShoppingBasket/>
                                </div>
                                <div className={styles.emptyText}>
                                    <p>Sua cesta está vazia</p>
                                </div>
                            </section> */}

                        </main>

                        <footer className={styles.basketFooter}>
                            <div className={styles.total}>
                                <p>Subtotal:</p>
                                <p>R$ 0,00</p>
                            </div>
                            <div className={styles.purchaseBtn}>
                                <a href="#">Finalizar Compra</a>
                            </div>
                        </footer>
                </section>
            </section>
        </>
    ) : null;
} 

SideBarCesta.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

export default SideBarCesta; 