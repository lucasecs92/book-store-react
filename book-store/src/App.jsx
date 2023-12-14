import './assets/css/global.module.css';
import styles from './assets/css/App.module.css';
    
import NavBar from './assets/components/NavBar.jsx';
import HomePage from './assets/components/HomePage.jsx';
import Footer from './assets/components/Footer.jsx';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, { ...book, quantity: 1 }]);
  };
  
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
