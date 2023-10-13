
import styles from "./OtherInfo.module.css"
import macbookImage from "./macbook.png"
import checkImage from "./check.svg"
function OtherInfo(){
    return (
        <div>
            <div class="container text-center mt-5 mb-5 pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-md-6 d-flex text-start flex-column justify-content-center gap-4 mb-5">
                        <h3 style={{color: '#034D82'}}>Schedule Your Post Whenever You Want</h3>
                        <p style={{color: '#90A3B4'}}>Publish your content automatically to ensure that your content reaches the right people. Built-in features such as</p>
                        <ul style={{paddingLeft:'0px'}}>
                            <li className={styles.forLi}><img src={checkImage}/><p>Best Time to Post</p></li>
                            <li className={styles.forLi}><img src={checkImage}/><p>Geolocation</p></li>
                            <li className={styles.forLi}><img src={checkImage}/><p>User Tag</p></li>
                            <li className={styles.forLi}><img src={checkImage}/><p>Other benefits</p></li>
                        </ul>
                        
                        <a style={{color: '#04AADD'}}href="#" className="link-offset-1 d-flex align-items-center">
                            Learn about scheduled post 
                            <div class={styles.arrow1}>
                                <div></div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <img src={macbookImage} style={{width:'100%', heigth:'50%'}}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo;