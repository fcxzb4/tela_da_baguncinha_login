import { Link } from "react-router-dom";
import styles from "./header.module.scss"

function Header() {
    return <>
        <header className={styles.Header}>
            <h1 className={styles.Steezus}>BIG BROTHER </h1>
            <Link className={styles.BtnHeader} to={'/home'}>HOME </Link>
            <Link className={styles.BtnHeader} to={'/'}>LOGIN</Link>
            <Link className={styles.BtnHeader} to={'/port'}>PORT</Link>
            <Link className={styles.BtnHeader} to={'/sign'}>SIGN</Link>
        </header>
    </>
}

export default Header;