import {Button, Card, Image, NavLink} from "react-bootstrap";
import styles from "./Container.module.css";
import curveImg from "../../../Source/Curve.svg"
function Container(){
    return(
        <div className="container">
           <Card className="col-12 col-md-7 border border-0" bg="transparent" border="transparent">
                <Card.Body className="mt-2 mt-md-3 mt-lg-4">
                    <Card.Title style={{ fontSize: '65px', color: "white"}}>We help you</Card.Title>
                    <Card.Title style={{ fontSize: '65px', color: "white" }}>grow your business faster</Card.Title>
                    <Image src={curveImg}></Image>
                    <Card.Text className="mt-3" style={{color: "white" }}>
                    Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .
                    </Card.Text>
                    <div style={{ display: "flex", gap: "40px", marginTop: "30px"}}>
                        <Button  size="lg" variant="light" className="rounded-1" style={{ fontSize: "1em",color: '#00A8DB'}}>See how it works</Button>
                        <NavLink className="btn btn-secondary d-flex align-items-center" style={{paddingLeft: "15px", fontSize: "1em",color: 'white'}}> 
                        Get a free demo 
                        <div class={styles.arrow1}>
                            <div></div>
                        </div>
                        </NavLink>    
                    </div>
                </Card.Body>
            </Card> 
        </div>
    );
};
// style={{ width: '50%', minWidth: '300px' }}
export default Container;