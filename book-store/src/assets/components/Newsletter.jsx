import '../styles/Newsletter.css';
import { FaRegPaperPlane } from "react-icons/fa";

const Newsletter = () => {

    return (
        <>
            <section className="newsletter" id='newsletter'>
                <h3>Subscribe To Our Newsletter</h3>
                <form className="newsletter-form">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nihil velit suscipit, corporis dignissimos asperiores iste ipsa ducimus.</p>
                    <div className="container-input">
                        <input
                            className="email-field"
                            type="text"
                            placeholder="Enter Your Email Address Here"
                        />
                        <button className="newsletter-btn" type="submit">
                            <span>SEND</span> 
                            <FaRegPaperPlane className="newsletter-icon"/>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Newsletter;