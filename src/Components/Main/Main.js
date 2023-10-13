import Companies from "./Companies/Companies";
import Feedbacks from "./Feedbacks/Feedbacks";
import styles from "./Main.module.css"
import TrialCard from "./TrialCard/TrialCard";
function Main(){
    return(
        <div className={styles.main}>
            <Companies />
            <Feedbacks />
            <TrialCard />
        </div>
    );
}

export default Main;