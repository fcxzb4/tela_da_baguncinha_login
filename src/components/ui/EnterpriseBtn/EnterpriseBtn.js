import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Enterprise.module.scss';

function Enterprise({icon}) {
  return <>
    <div className={styles.SocialButtons}>
      <button><FontAwesomeIcon icon={icon} className={styles.Icons} size='3x' /> </button>
    </div>
  </>

}
export default Enterprise
