import styles from "./Footer.module.css"
import { Navbar, Container,Row, Col, Nav} from 'react-bootstrap';
import logoImages from "../../Source/Logo.png"
import googleIcon from "./FooterImages/googleIcon.png"
import twitterIcon from "./FooterImages/twitterIcon.png"
import instagramIcon from "./FooterImages/instagramIcon.png"
import linkedinIcon from "./FooterImages/linkedinIcon.png"
function Footer(){
    return(
        <div className={styles.footer}>
            <Navbar>
                <Container className="d-flex justify-content-center">
                    <Row className="gap-3">
                        <Col>
                            <ul style={{paddingTop:'10px', paddingLeft:'0px', paddingRight:'20px',display:'flex', flexDirection: 'column', alignContent: 'start',listStyle: 'none'}}>
                                <li><img src={logoImages} style={{paddingTop: '8px'}}/></li>
                                <li><p style={{color: '#D3D6D8', paddingTop: '30px'}}>Build a modern and creative website with</p></li>
                                <li>
                                    <ul style={{display: 'flex', gap:'20px',listStyle: 'none', padding: '0'}}>
                                        <li><a href ="#" className={styles.aStyle}><img src={googleIcon}/></a></li>
                                        <li><a href ="#"><img src={twitterIcon}/></a></li>
                                        <li><a href ="#"><img src={instagramIcon}/></a></li>
                                        <li><a href ="#"><img src={linkedinIcon}/></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 style={{color: '#FFFFFF',padding: "10px",paddingLeft: "0px"}}>Product</h4>
                            <ul style={{listStyle: 'none'}} className={styles.ulStyle}>
                                <li><a className={styles.aStyle}>Landingpages</a></li>
                                <li><a className={styles.aStyle}>Features</a></li>
                                <li><a className={styles.aStyle}>Documentations</a></li>
                                <li><a className={styles.aStyle}>Referral Program</a></li>
                                <li><a className={styles.aStyle}>Pricing</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 style={{color: '#FFFFFF',padding: "10px",paddingLeft: "0px"}}>Services</h4>
                            <ul style={{listStyle: 'none'}} className={styles.ulStyle}>
                                <li><a className={styles.aStyle}>Documentations</a></li>
                                <li><a className={styles.aStyle}>Design</a></li>
                                <li><a className={styles.aStyle}>Themes</a></li>
                                <li><a className={styles.aStyle}>Illustrations</a></li>
                                <li><a className={styles.aStyle}>UI Kit</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 style={{color: '#FFFFFF',padding: "10px",paddingLeft: "0px"}}>Company</h4>
                            <ul style={{listStyle: 'none'}} className={styles.ulStyle}>
                                <li><a className={styles.aStyle}>About</a></li>
                                <li><a className={styles.aStyle}>Terms</a></li>
                                <li><a className={styles.aStyle}>Privacy Policy</a></li>
                                <li><a className={styles.aStyle}>Careers</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 style={{color: '#FFFFFF',padding: "10px",paddingLeft: "0px"}}>More</h4>
                            <ul style={{listStyle: 'none'}} className={styles.ulStyle}>
                                <li><a className={styles.aStyle}>Documentations</a></li>
                                <li><a className={styles.aStyle}>License</a></li>
                                <li><a className={styles.aStyle}>Changelog</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;