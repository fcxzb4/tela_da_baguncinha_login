import ButtonText from '../../ui/btn_text/ButtonText';
import styles from './login_btns.module.scss'
import ButtonIcon from '../../ui/btns_enteprise/ButtonIcon';
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

function LoginBtns({tryLogin}) {
    return <>
        <div className={styles.LoginBtns}>
            <ButtonText onClick={tryLogin}>ENTRAR</ButtonText>
            <div>
                <h6>OU</h6>
                <div>
                    <ButtonIcon icon={faGoogle}/>
                    <ButtonIcon icon={faApple}/>
                    <ButtonIcon icon={faMicrosoft}/>
                </div>
            </div>
        </div>
    </>
}

export default LoginBtns;