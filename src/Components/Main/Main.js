import Companies from "./Companies/Companies";
import styles from "./Main.module.css"
import TrialCard from "./TrialCard/TrialCard";
function Main(){
    return(
        <div className={styles.main}>
            <Companies />
            <TrialCard />
        </div>
    );
}

export default Main;