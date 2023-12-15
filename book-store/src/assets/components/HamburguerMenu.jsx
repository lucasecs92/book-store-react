import styles from '../css/HamburgerMenu.module.css';


const HamburgerMenu = ({ isOpen, setIsOpen, handleLoginClick, handleCartClick }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.menu}>
            <a href="#" onClick={() => {setIsOpen(false); handleLoginClick();}}>Entrar</a>
            <a href="#" onClick={(event) => {event.preventDefault(); setIsOpen(false); handleCartClick();}}>Cesta</a>
            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsOpen(false)}>Mais Vendidos</a>
            <a href="#" onClick={() => setIsOpen(false)}>Lançamentos</a>
            <a href="#" onClick={() => setIsOpen(false)}>Se Inscreva</a>
            <a href="#" onClick={() => setIsOpen(false)}>Download App</a>
        </div>
    );
};

export default HamburgerMenu;