import { useEffect, useRef, useState} from 'react';
import styles from '../css/FormLogin.module.css';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const FormLogin = () => {

    const formSigninRef = useRef(null);
    const formSignupRef = useRef(null);
    const btnColorRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    
    const [selectedButton, setSelectedButton] = useState(null);
    const [signinColor, setSigninColor] = useState('white');
    const [signupColor, setSignupColor] = useState('black');

    useEffect(() => {
        const btnSignin = document.querySelector('#btnSignin');
        const btnSignup = document.querySelector('#btnSignup');
 
        btnSignin.addEventListener('click', () => {
            setSelectedButton('signin');
            formSigninRef.current.style.left = "25px";
            formSignupRef.current.style.left = "450px";
            btnColorRef.current.style.left = "0px";
            setSigninColor('white'); // Altere para a cor que você deseja
            setSignupColor('black'); // Altere para a cor que você deseja
        });
 
        btnSignup.addEventListener('click', () => {
            setSelectedButton('signup');
            formSigninRef.current.style.left = "-450px";
            formSignupRef.current.style.left = "25px";
            btnColorRef.current.style.left = "110px";
            setSigninColor('black'); // Altere para a cor que você deseja
            setSignupColor('white'); // Altere para a cor que você deseja
        });
    }, []);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
 
    return (
        <>
            <section className={styles.container}>
                
                <div className={styles.buttonsForm}>
                    <div className={styles.btnColor} ref={btnColorRef}></div>
                    <button id="btnSignin" type="button" className={selectedButton === 'signin' ? 'selected' : ''} style={{color: signinColor}}>Sign In</button>
                    <button id="btnSignup" type="button" className={selectedButton === 'signup' ? 'selected' : ''} style={{color: signupColor}}>Sign Up</button>
                </div>

                <form className={styles.signIn} ref={formSigninRef}>

                    <input className={styles.inputText} id='input-text' type="text" placeholder="Email" required />

                    <div className={styles.divInputPsw}>
                        <input className={styles.inputPassword} type={showPassword ? "text" : "password"} placeholder="Password" required />
                        {showPassword ? <FaRegEyeSlash onClick={handleShowPassword}/> : <FaRegEye onClick={handleShowPassword}/>}    
                    </div>
                    
                    <div className={styles.divCheck}>
                        <input type="checkbox" id='remember-me'/>
                        <label htmlFor="remember-me">remember me</label>
                    </div>

                    <button className={styles.btnSubmit} type="submit">sign in</button>

                    <a href="#">forget password ?</a>
                </form> 

                <form className={styles.signUp} ref={formSignupRef}>

                    <input className={styles.inputText} type="text" placeholder='Nome completo' required />

                    <input className={styles.inputText} type="text" placeholder="Email" required />

                    <div className={styles.divInputPsw}>
                        <input className={styles.inputPassword} type={showPassword ? "text" : "password"} placeholder="Create Password" required />
                        {showPassword ? <FaRegEyeSlash onClick={handleShowPassword}/> : <FaRegEye onClick={handleShowPassword}/>}
                    </div>

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