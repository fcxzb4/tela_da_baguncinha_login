import styles from "./main.module.scss"

function Main() {
    return <>
        <main className={styles.Main}>
            <div className={styles.AllText}>
                <h1 className={styles.Myname}>STEEZUS</h1>
            </div>
            <div className={styles.SubText}>
                <p>I have come to chew bubble gum and kick ass. And I'm all out of bubble gum.</p>
            </div>
        </main>
    </>
}
export default Main;