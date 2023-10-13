import phoneImages from "./phone.png"
import styles from "./MainInfo.module.css"
function MainInfo(){
    return (
        <div>
            <div class="container text-center pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src={phoneImages} style={{width:'70%', heigth:'30%'}}></img>
                    </div>
                    <div class="col-12 col-md-6 d-flex text-start flex-column justify-content-center gap-4">
                        <h3 style={{color: '#034D82'}}>Measure Impressions and Reach Post</h3>
                        <p style={{color: '#90A3B4'}}>Graphs displaying your performance for metrics like follower evolution, average engagement rate per post and reach and impressions to give you the insights.</p>
                        <a style={{color: '#04AADD'}}href="#" className="link-offset-1 d-flex align-items-center">
                            Learn about Graphs
                            <div class={styles.arrow1}>
                                <div></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainInfo;