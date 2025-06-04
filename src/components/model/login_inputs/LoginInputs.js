import { faKey , faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Input from "../../ui/input/Input"
import styles from "./LoginInputs.model.scss"
import TextNavegate from "../../ui/text_navigate/TextNavegate"

function LoginInputs({ onChange }) {
    return <>
        <div className={styles.Inputs}>
            <Input 
                name="email"
                type='email'
                icon={faEnvelope}
                onChange={onChange}
            />
            <Input 
                name='password'
                type='password'
                icon={faKey}
                onChange={onChange}
            />
            <TextNavegate text={"Esqueceu sua senha"} />
        </div>
    </>
}
export default LoginInputs