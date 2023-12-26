import styles from '../css/HomePage.module.css';
import { FaRegPaperPlane } from "react-icons/fa";

import Slider from './Slider.jsx';
import BestSellers from './BestSellers.jsx';
import Release from './Release.jsx';

import PropTypes from 'prop-types';
import DownloadApp from './DownloadApp.jsx';

const HomePage = (props) => {

    return (
        <>
            <section className={styles.containerHome}>

                <Slider/>
                
                <Release addToCart={props.addToCart}/>
                
                <section className={styles.newsletter} id='newsletter'>
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
                                <span>SEND</span> 
                                <FaRegPaperPlane className={styles.newsletterIcon}/>
                            </button>
                        </div>
                    </form>
                </section>

                <BestSellers addToCart={props.addToCart}/>

                <DownloadApp/>
            </section>
        </>
    )
}

HomePage.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default HomePage;