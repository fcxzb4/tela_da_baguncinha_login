import styles from './button_text.module.scss'

function ButtonText({ children, onClick, type }) {
    return <>
        <button
            onClick={onClick}
            className={styles.ButtonText}
            type={type}
        >
            {children}
        </button>
    </>
}

export default ButtonText