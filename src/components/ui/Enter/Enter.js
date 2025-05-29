import styles from './Enter.module.scss';

function Enter() {
  return <>
    <button className={styles.cyberButton}>
      ENTER
      <span className={styles.glitch}></span>
      <span className={styles.glow}></span>
    </button>

  </>
}
export default Enter
