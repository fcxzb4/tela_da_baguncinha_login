import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from './Enterprise.module.scss';

function Enterprise() {
  return <>
    <div className={styles.SocialButtons}>
      <button><FontAwesomeIcon icon={faInstagram} className={styles.Icons} size='4x' /> </button>
      <button><FontAwesomeIcon icon={faGoogle} className={styles.Icons} size='4x' /> </button>
      <button><FontAwesomeIcon icon={faDiscord} className={styles.Icons} size='4x' /> </button>
    </div>
  </>
}
export default Enterprise