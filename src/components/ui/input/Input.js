import styles from './input.module.scss';

function Input() {
   return <>
      <label htmlFor="input">LOGIN</label>
      <p>assine sua alma , com o diabo</p>
      <input id="input" className={styles.Input}></input>
      <p>PASSWORD</p>
      <input id="input2" className={styles.Input}></input>
   </>
}
export default Input