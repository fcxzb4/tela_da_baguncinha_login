import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss"

function Footer() {
  return <>
    <footer className={styles.Footer}>
        <button className={styles.BtnFooter}>
            <FontAwesomeIcon   />
        </button>
    </footer>
  </>
}
export default Footer;
