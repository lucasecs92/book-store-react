import styles from '../css/Footer.module.css';

import { PiBooksDuotone } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram, FaPinterestP } from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <section className={styles.footer}>

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
                        <a className={styles.socialItem} href="#"><AiOutlineFacebook/></a>
                        <a className={styles.socialItem} href="#"><FiYoutube/></a>
                        <a className={styles.socialItem} href="#"><FaInstagram /></a>
                        <a className={styles.socialItem} href="#"><FaPinterestP/></a>
                    </section>
                </section>

            </section>
        </>
    )
}

export default Footer;