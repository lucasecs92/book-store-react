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
        <>
            <section className={styles.container}>
                
                <div className={styles.buttonsForm}>
                    <div className={styles.btnColor} ref={btnColorRef}></div>
                    <button id="btnSignin">Sign in</button>
                    <button id="btnSignup">Sign up</button>
                </div>

                <form className={styles.signIn} ref={formSigninRef}>

                    <span>username</span>
                    <input className={styles.inputText} type="text" placeholder="enter your email" required />

                    <span>password</span>
                    <input className={styles.inputPassword} type="password" placeholder="enter your password" required />
                    
                    <div className={styles.divCheck}>
                        <input type="checkbox" id='remember-me'/>
                        <label htmlFor="remember-me">remember me</label>
                    </div>

                    <button className={styles.btnSubmit} type="submit">sign in</button>

                    <p>forget password ? <a href="#">click here</a></p>
                </form> 

                <form className={styles.signUp} ref={formSignupRef}>

                    <input className={styles.inputText} type="text" placeholder="Email" required />
                    <FaEnvelope className={styles.iEmail}/>

                    <input className={styles.inputPassword} type="password" placeholder="Password" required />
                    <FaLock className={styles.iPassword}/>

                    <input className={styles.inputPassword} type="password" placeholder="Confirm Password" required />
                    <FaLock className={styles.iPassword2}/>

                    <div className={styles.divCheck}>
                        <input type="checkbox" required id='i-agree'/>
                        <label htmlFor="i-agree">I agree that the Book Store, including member, may send me content, offers and more.</label>
                    </div>
                    
                    <button className={styles.btnSubmit} type="submit">register</button>
                </form>
            </section>
        </>
    )
}

export default FormLogin;