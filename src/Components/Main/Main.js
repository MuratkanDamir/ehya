import Companies from "./Companies/Companies";
import Feedbacks from "./Feedbacks/Feedbacks";
import styles from "./Main.module.css"
import MainInfo from "./MainInfo/MainInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import TrialCard from "./TrialCard/TrialCard";
function Main(){
    return(
        <div className={styles.main}>
            <Companies />
            <MainInfo />
            <OtherInfo />
            <Feedbacks />
            <TrialCard />
        </div>
    );
}

export default Main;