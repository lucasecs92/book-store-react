import { Basket, FacebookLogo, InstagramLogo, MagnifyingGlass, PinterestLogo, User, YoutubeLogo } from '@phosphor-icons/react';
import { PiBooksDuotone } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";

import styles from './assets/css/App.module.css';
import './assets/css/global.module.css';

function App() {

  return (
    <>
      <section className={styles.containerApp}>
          <header>
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
                        <option className={styles.dropdownItem} value="Titulo">Título</option>
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
                        <li className={styles.navLogin}>
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
            <section className={styles.dividingLineNav}>
            </section>
          </header>

          <main>
            <section className={styles.containerHome}>
                <section className={styles.banner}>
                </section>
          
                <section className={styles.maisVendidos}>
          
                </section>

                <section className={styles.newsletter}>
                    <h3>Subscribe To Our Newsletter</h3>
                    <form className={styles.newsletterForm}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nihil velit suscipit, corporis dignissimos asperiores iste ipsa ducimus.</p>
                        <div className={styles.containerInput}>
                            <input
                                className={styles.emailField}
                                type="text"
                                placeholder="Enter Your Email Address Here"
                            />
                            <button className={styles.newsletterBtn} type="submit">
                                <span>SEND</span> <FaRegPaperPlane/>
                            </button>
                        </div>
                    </form>
                </section>
            </section>
          </main>

          <footer>
            <section className={styles.footer}>

                <section className={styles.dividingLine}>
                </section>

                <section className={styles.mainFooter}>
                    <aside className={styles.companyBrand}>
                        <a className={styles.logo} href="#">
                            <PiBooksDuotone/>Book store
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus
                            nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                            semper erat ac in suspendisse iaculis.
                        </p>
                    </aside>
                    <aside className={styles.infoFooter}>
                        <aside className={styles.footerWrapper}>
                            <h2>About Us</h2>
                            <ul>
                                <li><a href="#">ARTICLES</a></li>
                                <li><a href="#">VISION</a></li>
                                <li><a href="#">CAREERS</a></li>
                                <li><a href="#">SERVICE TERMS</a></li>
                                <li><a href="#">DONATE</a></li>
                            </ul>
                        </aside>
                        <aside className={styles.footerWrapper}>
                            <h2>Discover</h2>
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">BOOKS</a></li>
                                <li><a href="#">AUTHORS</a></li>
                                <li><a href="#">SUBJECTS</a></li>
                                <li><a href="#">ADVANCED SEARCH</a></li>
                            </ul>
                        </aside>
                        <aside className={styles.footerWrapper}>
                            <h2>My Account</h2>
                            <ul>
                                <li><a href="#">SIGN</a></li>
                                <li><a href="#">VIEW CART</a></li>
                                <li><a href="#">MY WISHLIST</a></li>
                                <li><a href="#">TRACK MY ORDER</a></li>
                            </ul>
                        </aside>
                        <aside className={styles.footerWrapper}>
                            <h2>Help</h2>
                            <ul>
                                <li><a href="#">HELP CENTER</a></li>
                                <li><a href="#">REPORT A PROBLEM</a></li>
                                <li><a href="#">SUGGESTING EDITS</a></li>
                                <li><a href="#">CONTACT US</a></li>
                            </ul>
                        </aside>
                    </aside>
                </section>

                <section className={styles.secondaryFooter}>
                    <p>Copyright (c) 2023 Book Store.</p>
                    <section className={styles.socialLogos}>
                        <a className={styles.socialItem} href="#"><FacebookLogo/></a>
                        <a className={styles.socialItem} href="#"><YoutubeLogo /></a>
                        <a className={styles.socialItem} href="#"><InstagramLogo/></a>
                        <a className={styles.socialItem} href="#"><PinterestLogo/></a>
                    </section>
                </section>
            </section>
          </footer>
      </section>
    </>
  )
}

export default App
