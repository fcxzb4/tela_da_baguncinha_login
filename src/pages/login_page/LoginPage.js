import { useState } from 'react';
import LoginBtns from '../../components/container/login_btns/LoginBtns';
import LoginInputs from '../../components/container/login_inputs/LoginInputs';
import TextNavigation from '../../components/ui/text_navigation/TextNavigation';

import styles from './login_page.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {
    const [loginForm, setLoginForm] = 
    useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const navigate = useNavigate();

    const cad = {
        email: '@mail.com',
        password: '1',
    }

    const {login } = useAuth();

    const tryLogin = () => {
        const { email, password } = loginForm;

        if (email === cad.email && password === cad.password) {
            alert("Login realizado com sucesso!");
            login();
            navigate('/home');
        } else {
            alert("Email ou Senha incorretos!");
        }
    }

    return <>
        <div className={styles.LoginPage}>
            <div className={styles.Blur}></div>
            <div className={styles.Title}>
                <h1>LOYALTy</h1>
                <p>OBEY THE PARTY STAY LOYAL!</p>
            </div>
            <div>
                <LoginInputs onChange={onChange}/>
                <LoginBtns tryLogin={tryLogin}/>
            </div>
            <div className={styles.NavigationCreateAcount}>
                <h6>obey your master?&nbsp;</h6>
                <TextNavigation text={"KEEP YOUR FREEDOM!"} />
            </div>
        </div>
    </>
}

export default LoginPage;