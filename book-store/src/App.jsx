import './assets/css/global.css';
import styles from './assets/css/App.module.css';
    
import NavBar from './assets/components/NavBar.jsx';
import HomePage from './assets/components/HomePage.jsx';
import Footer from './assets/components/Footer.jsx';
import { useEffect, useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === book.id);
      if (existingItem) {
        // Se o livro já está na cesta, incrementa a quantidade
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Se o livro não está na cesta, adiciona como um novo item
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])
  
  return (
    <>
      <section className={styles.containerApp}>
          <header>
            <NavBar cartItems={cartItems} setCartItems={setCartItems}/>
          </header>
          <main>
            <HomePage addToCart={addToCart}/>
          </main>
          <footer>
            <Footer/>
          </footer>
      </section>
    </>
  )
}

export default App;
