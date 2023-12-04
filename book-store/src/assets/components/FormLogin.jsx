import { useEffect, useRef } from 'react';
import styles from '../css/FormLogin.module.css';

import { FaEnvelope, FaLock } from "react-icons/fa";

const FormLogin = () => {

    const formSigninRef = useRef(null);
    const formSignupRef = useRef(null);
    const btnColorRef = useRef(null);

    useEffect(() => {
        const btnSignin = document.querySelector('#btnSignin');
        const btnSignup = document.querySelector('#btnSignup');
 
        btnSignin.addEventListener('click', () => {
            formSigninRef.current.style.left = "25px";
            formSignupRef.current.style.left = "450px";
            btnColorRef.current.style.left = "0px";
        });
 
        btnSignup.addEventListener('click', () => {
            formSigninRef.current.style.left = "-450px";
            formSignupRef.current.style.left = "25px";
            btnColorRef.current.style.left = "110px";
        });
    }, []);
 
    return (

        <section className={styles.container}>
            <div className={styles.buttonsForm}>
                <div className={styles.btnColor} ref={btnColorRef}></div>
                <button id="btnSignin">Sign in</button>
                <button id="btnSignup">Sign up</button>
            </div>

            <form className={styles.signIn} ref={formSigninRef}>

                <input className={styles.inputText} type="text" placeholder="Email" required />
                <FaEnvelope />

                <input className={styles.inputPassword} type="password" placeholder="Password" required />
                <FaLock />
                
                <div className={styles.divCheck}>
                    <input type="checkbox" />
                    <span>Remember Password</span>
                </div>
                <button className={styles.btnSubmit} type="submit">Sign in</button>
            </form>

            <form className={styles.signUp} ref={formSignupRef}>
                <input className={styles.inputText} type="text" placeholder="Email" required />
                <FaEnvelope className={styles.iEmail}/>
                {/* <i className="fas fa-envelope iEmail"></i> */}
                <input className={styles.inputPassword} type="password" placeholder="Password" required />
                <FaLock className={styles.iPassword}/>
                {/* <i className="fas fa-lock iPassword"></i> */}
                <input className={styles.inputPassword} type="password" placeholder="Password" required />
                <FaLock className={styles.iPassword2}/>
                {/* <i className="fas fa-lock iPassword2"></i> */}
                <div className={styles.divCheck}>
                    <input type="checkbox" required />
                    <span>I agree that the Book Store, including member, may send me content, offers and more.</span>
                </div>
                <button className={styles.btnSubmit} type="submit">Sign up</button>
            </form>
        </section>
    )
}

export default FormLogin;