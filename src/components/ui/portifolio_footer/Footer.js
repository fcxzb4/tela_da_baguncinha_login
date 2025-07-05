
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss"
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return <>
    <footer className={styles.Footer}>
      <button className={styles.BtnFooter}>
        <FontAwesomeIcon icon={faDiscord} size="3x" />
      </button>
    </footer>
  </>
}
export default Footer;
