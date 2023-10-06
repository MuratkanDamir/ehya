import styles from "./Header.module.css"
import logoImage from "../../Source/Logo.png";

function Header(){
    return (
        <div className={`container ${styles.header}`}>
            <div className="row">
                <div className={`col-sm-1 ${styles.log} d-flex justify-content-center align-items-center`}>
                    <img src={logoImage}/>
                </div>
                <div className={`col-sm col-8 ${styles.navigation}`}>
                    <div className="row">
                        <div className="col-sm-2 col-1">
                            <a href="#">Home</a> 
                        </div>
                        <div className="col-sm-2 col-1">
                            <a href="#">Landing</a>
                        </div>
                        <div className="col-sm-2 col-1">
                            <a href="#">Pages</a>
                        </div>
                        <div className="col-sm-2 col-1">
                            <a href="#">Docs</a>
                        </div>
                        <div className="col-sm-2 col-1">
                            <a href="#">Help</a>
                        </div>
                    </div>
                </div>
                <div className={`col-sm-1  col-3 ${styles.rightMenu} d-flex justify-content-center align-items-center`}>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header;