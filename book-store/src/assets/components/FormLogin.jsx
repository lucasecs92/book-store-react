import '../styles/FormLogin.css';
import { useEffect, useRef, useState} from 'react';
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
            <section className="container">
                
                <div className="buttons-form">
                    <div className="btn-color" ref={btnColorRef}></div>
                    <button id="btnSignin" type="button" className={selectedButton === 'signin' ? 'selected' : ''} style={{color: signinColor}}>Sign In</button>
                    <button id="btnSignup" type="button" className={selectedButton === 'signup' ? 'selected' : ''} style={{color: signupColor}}>Sign Up</button>
                </div>

                <form className="sign-in" ref={formSigninRef}>

                    <input className="input-text" id='input-text' type="text" placeholder="Email" required />

                    <div className="div-input-psw">
                        <input className="input-password" type={showPassword ? "text" : "password"} placeholder="Password" required />
                        {showPassword ? <FaRegEyeSlash onClick={handleShowPassword}/> : <FaRegEye onClick={handleShowPassword}/>}    
                    </div>
                    
                    <div className="div-check">
                        <input type="checkbox" id='remember-me'/>
                        <label htmlFor="remember-me">remember me</label>
                    </div>

                    <button className="btn-submit" type="submit">sign in</button>

                    <a href="#">forget password ?</a>
                </form> 

                <form className="sign-up" ref={formSignupRef}>

                    <input className="input-text" type="text" placeholder='Nome completo' required />

                    <input className="input-text" type="text" placeholder="Email" required />

                    <div className="div-input-psw">
                        <input className="input-password" type={showPassword ? "text" : "password"} placeholder="Create Password" required />
                        {showPassword ? <FaRegEyeSlash onClick={handleShowPassword}/> : <FaRegEye onClick={handleShowPassword}/>}
                    </div>

                    <div className="div-check">
                        <input type="checkbox" required id='i-agree'/>
                        <label htmlFor="i-agree">I agree that the Book Store, including member, may send me content, offers and more.</label>
                    </div>
                    
                    <button className="btn-submit" type="submit">register now</button>
                </form>
            </section>
        </>
    )
}

export default FormLogin;