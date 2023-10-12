import Companies from "./Companies/Companies";
import styles from "./Main.module.css"
function Main(){
    return(
        <div className={styles.main}>
            <Companies />
        </div>
    );
}

export default Main;