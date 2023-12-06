import { useEffect, useRef} from 'react';
import styles from '../css/FormLogin.module.css';

const FormLogin = () => {

    const formSigninRef = useRef(null);
    const formSignupRef = useRef(null);
    const btnColorRef = useRef(null);
    
    // const [textColorSignin, setTextColorSignin] = useState('white');
    // const [textColorSignup, setTextColorSignup] = useState('black');

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
                    <button id="btnSignin" type="button">Sign In</button>
                    <button id="btnSignup" type="button">Sign Up</button>
                </div>

                <form className={styles.signIn} ref={formSigninRef}>

                    <input className={styles.inputText} id='input-text' type="text" placeholder="Email" required />

                    <input className={styles.inputPassword} type="password" placeholder="Password" required />
                    
                    <div className={styles.divCheck}>
                        <input type="checkbox" id='remember-me'/>
                        <label htmlFor="remember-me">remember me</label>
                    </div>

                    <button className={styles.btnSubmit} type="submit">sign in</button>

                    <a href="#">forget password ?</a>
                </form> 

                <form className={styles.signUp} ref={formSignupRef}>

                    <input className={styles.inputText} type="text" placeholder="Email" required />

                    <input className={styles.inputPassword} type="password" placeholder="Create Password" required />

                    <input className={styles.inputPassword} type="password" placeholder="Confirm Password" required />

                    <div className={styles.divCheck}>
                        <input type="checkbox" required id='i-agree'/>
                        <label htmlFor="i-agree">I agree that the Book Store, including member, may send me content, offers and more.</label>
                    </div>
                    
                    <button className={styles.btnSubmit} type="submit">register now</button>
                </form>
            </section>
        </>
    )
}

export default FormLogin;