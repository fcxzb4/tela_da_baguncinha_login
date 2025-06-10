import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
    return <>
        <div className={styles.Header}>
            <Link to={'/'}>
                <button className={styles.btn_header}>Login</button>
            </Link>
            <Link to={'/home'}>
                <button className={styles.btn_header}>Home</button>
            </Link>
            <Link to={'/form'}>
                  <button className={styles.btn_header}>Form</button>
            </Link> 
        </div>
    </>
}

export default Header