import './assets/css/global.module.css';
import styles from './assets/css/App.module.css';
    
import NavBar from './assets/components/NavBar.jsx';
import HomePage from './assets/components/HomePage.jsx';
import Footer from './assets/components/Footer.jsx';

function App() {

  return (
    <>
      <section className={styles.containerApp}>
          <header>
            <NavBar/>
          </header>
          <main>
            <HomePage/>
          </main>
          <footer>
            <Footer/>
          </footer>
      </section>
    </>
  )
}

export default App
