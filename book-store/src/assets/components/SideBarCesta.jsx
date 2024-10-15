import '../styles/SideBarCesta.css'
import { useState } from 'react';
import { LuShoppingBasket, LuX } from "react-icons/lu";
import { FaTimesCircle } from "react-icons/fa";
import PropTypes from 'prop-types';

const SideBarCesta = ({ onClose, cartItems, onRemoveItem, setCartItems }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    const handleRemoveClick = (event, item) => {
        event.preventDefault();
        onRemoveItem(item);
    };

    const subtotal = cartItems.reduce((total, item) => total + (Number(item.price.replace('R$', '')) * item.quantity), 0);

    const handleIncreaseQuantity = (item) => {
        const newCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(newCartItems);
    };

    const handleDecreaseQuantity = (item) => {
        const newCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) } : cartItem
        );
        setCartItems(newCartItems);
    };
      
    
    return isOpen ? (
        <>
            <section className="basket-container">
                <section className="basket-container-second">
                        <header className="basket-header">
                            <div className="title-header">
                                <h3>Minha Cesta</h3>
                            </div>
                            <div className="close-header-btn" onClick={handleCloseClick}>
                                <LuX />
                            </div>
                        </header>

                        <main className="basket-items">
                            {cartItems.map((item, index) => (
                                <section className="basket-item-book" key={index}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="basket-item-img" 
                                    />
                                    <div className="basket-info-produto">
                                        <div className="basket-info-wrap">
                                            <p className="produto-title">{item.title}</p>
                                            <a 
                                            className="delete-item" 
                                            href="#"
                                            onClick={(event) => handleRemoveClick(event, item)}
                                            >
                                               <FaTimesCircle />
                                            </a>
                                        </div>
                                        <div className="quantidade-produto">
                                            <span className="basket-add-remove">
                                                <a href="#" className="quantidade-minus" onClick={() => handleDecreaseQuantity(item)}>-</a>
                                                <input className="quantidade-number" value={item.quantity}/>
                                                <a href="#" className="quantidade-plus" onClick={() => handleIncreaseQuantity(item)}>+</a>
                                            </span>
                                            <span className="valor">
                                                <p>{`R$ ${(Number(item.price.replace('R$', '')) * item.quantity).toFixed(2)}`}</p>
                                            </span>
                                        </div>
                                    </div>

                                </section>                               
                            ))}

                            {cartItems.length === 0 && (
                                <section className="empty-basket">
                                    <div className="empty-basket-icon">
                                        <LuShoppingBasket/>
                                    </div>
                                    <div className="empty-basket-text">
                                        <p>Sua cesta está vazia</p>
                                    </div>
                                </section>
                            )}
                        </main>

                        <footer className="basket-footer">
                            {cartItems.length > 0 && (
                                <section className="basket-footer-inner">
                                    <div className="total">
                                        <h3>Subtotal:</h3>
                                        <p>R$ {subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="purchase-btn">
                                        <a href="#">Finalizar Compra</a>
                                    </div>
                                </section>
                            )}
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
    setCartItems: PropTypes.func.isRequired,
};

export default SideBarCesta; 