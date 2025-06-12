import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ name, type = "text", icon, onChange, value}) {
  return (
    <div className={styles.inputWrapper}>
      <FontAwesomeIcon icon={icon} className={styles.iconLeft} />
      <input
        type={type}
        name={name}
        className={styles.input}
        autoComplete="off"
        onChange={onChange}
        value={value}
      />
      {type === 'password' ?
        <FontAwesomeIcon icon={faEye} className={styles.iconRight} /> 
        : 
        <></>

      }
    </div>
  );
}

export default Input;