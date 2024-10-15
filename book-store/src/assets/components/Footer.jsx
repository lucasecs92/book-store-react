import '../styles/Footer.css';

import { PiBooksDuotone } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram, FaPinterestP } from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <section className="footer">

                <section className="main-footer">
                    <aside className="company-brand">
                        <a className="logo" href="#">
                            <PiBooksDuotone/>Book store
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus
                            nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                            semper erat ac in suspendisse iaculis.
                        </p>
                    </aside>
                    <aside className="info-footer">
                        <aside className="footer-wrapper">
                            <h2>About Us</h2>
                            <ul>
                                <li><a href="#">ARTICLES</a></li>
                                <li><a href="#">VISION</a></li>
                                <li><a href="#">CAREERS</a></li>
                                <li><a href="#">SERVICE TERMS</a></li>
                                <li><a href="#">DONATE</a></li>
                            </ul>
                        </aside>
                        <aside className="footer-wrapper">
                            <h2>Discover</h2>
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">BOOKS</a></li>
                                <li><a href="#">AUTHORS</a></li>
                                <li><a href="#">SUBJECTS</a></li>
                                <li><a href="#">ADVANCED SEARCH</a></li>
                            </ul>
                        </aside>
                        <aside className="footer-wrapper">
                            <h2>My Account</h2>
                            <ul>
                                <li><a href="#">SIGN</a></li>
                                <li><a href="#">VIEW CART</a></li>
                                <li><a href="#">MY WISHLIST</a></li>
                                <li><a href="#">TRACK MY ORDER</a></li>
                            </ul>
                        </aside>
                        <aside className="footer-wrapper">
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

                <section className="secondary-footer">
                    <p>Copyright (c) 2023 Book Store.</p>
                    <section className="social-logos">
                        <a className="social-item" href="#"><AiOutlineFacebook/></a>
                        <a className="social-item" href="#"><FiYoutube/></a>
                        <a className="social-item" href="#"><FaInstagram /></a>
                        <a className="social-item" href="#"><FaPinterestP/></a>
                    </section>
                </section>

            </section>
        </>
    )
}

export default Footer;