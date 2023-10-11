import {Button, Card} from "react-bootstrap";
import styles from "./Container.module.css";
function Container(){
    return(
        <div className="container bg-opacity-0">
           <Card style={{ width: '50%'}}>
                <Card.Body>
                    <Card.Title>We help you</Card.Title>
                    <Card.Title>Grow your busines faster</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default Container;