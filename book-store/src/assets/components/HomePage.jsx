import styles from '../css/HomePage.module.css';
import { FaRegPaperPlane } from "react-icons/fa";

import Slider from './Slider.jsx';
import BestSellers from './BestSellers.jsx';

const HomePage = () => {

    return (
        <>
            <section className={styles.containerHome}>

                <Slider/>
                
                <section className={styles.maisVendidos}>
                    <BestSellers/>
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
        </>
    )
}

export default HomePage;