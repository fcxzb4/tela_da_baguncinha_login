import styles from "./LoginBtns.module.scss"
import Enterprise from "../../ui/EnterpriseBtn/EnterpriseBtn"
import {faInstagram , faGoogle , faDiscord} from "@fortawesome/free-brands-svg-icons";
import ButtonText from "../../ui/buttons_text/ButtonText";

function Loginbtns({tryLogin}) {
    return <>
        <div className={styles.LoginBtns}>
            <ButtonText onClick={tryLogin}>ENTRAR</ButtonText>
            <div className={styles.icon}>
            <Enterprise icon={faInstagram } />
            <Enterprise icon={faGoogle} />
            <Enterprise icon={faDiscord } />
            </div>
        </div>
    </>
}
export default Loginbtns