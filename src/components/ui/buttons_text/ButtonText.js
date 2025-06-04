import styles from './button_text.module.scss'

function ButtonText({ children, onClick }) {
    return <>
        <button onClick={onClick} className={styles.ButtonText}>{children}
            <span className={styles.glitch}></span>
            <span className={styles.glow}></span>
        </button>
    </>
}

export default ButtonText