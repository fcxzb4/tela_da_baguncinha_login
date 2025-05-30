import styles from './text_navigation.module.scss'

function TextNavegate({ text }) {
    return <>
        <button className={styles.TextNavigation}>{text}</button>
    </>
}

export default TextNavegate