import LoginInputs from '../../components/model/login_inputs/LoginInputs';
import { useState } from 'react';
import Loginbtns from '../../components/model/LoginBtns/LoginBtns';

import styles from "./LoginPage.module.scss";
import { useNavigate } from 'react-router-dom';
import TextNavegate from '../../components/ui/text_navigate/TextNavegate';

function LoginPage() {
    const [LoginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate;

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const tryLogin = () => {
        const { email, password } = LoginForm;

        if (email === 'teste@gmail.com' && password === '12345678') {
            alert("Login realizado com sucesso!");
            navigate('/home');
        } else {
            alert("Email ou senha incorretos!")
        }
    }
    return <>
        <div className={styles.LoginPage}>
            <div className={styles.blur}></div>
            <div className={styles.title}>
                <h1>LOGIN</h1>
                <p>Gloria senhor</p>
            </div>
            <div >
                <LoginInputs onChange={onChange} />
                <Loginbtns tryLogin={tryLogin} />
            </div>
            <div className={styles.NavigationCreateAcount}>
                <h6>Não tem uma conta?&nbsp;</h6>
                <TextNavegate text={"Clique Aqui"} />
            </div>
        </div>
    </>
}
export default LoginPage;