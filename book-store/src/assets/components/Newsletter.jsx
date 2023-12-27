import styles from '../css/Newsletter.module.css';
import { FaRegPaperPlane } from "react-icons/fa";

const Newsletter = () => {

    return (
        <>
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
        </>
    )
}

export default Newsletter;