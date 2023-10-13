// import {Container, Card, Row, Col, NavLink} from 'react-bootstrap'
// function TrialCard(){
//     return(
//         <Container>
//             <Row>
//                 <Col>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>
//                                 Grow your brand 
//                                 <br/>
//                                 presence on social media
//                             </Card.Title>
//                             <Card.Text>
//                                 Join with more 1200+ happy customers
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <NavLink>Get</NavLink>
//                 </Col>  
//             </Row>
//         </Container>
//     );
// }

// export default TrialCard;

import styles from "./TrialCard.module.css"
import {Container, Card, Row, Col, NavLink} from 'react-bootstrap'
function TrialCard(){

    const imageStyle1 = {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    };
    const imageStyle2 = {
        position: 'absolute',
        left: 20,
        zIndex: 2,
    };
    const imageStyle3 = {
        position: 'absolute',
        left: 40,
        zIndex: 3,
    };
    const imageStyle4 = {
        position: 'absolute',
        left: 60,
        zIndex: 4,
    };
    const imageStyle5 = {
        position: 'absolute',
        left: 80,
        zIndex: 5,
    };
    const imageStyle6 = {
        position: 'absolute',
        left: 130,
        zIndex: 6,
    };

    return(
        <div class="container text-center rounded" style={{backgroundColor: '#00B8D9'}}>
            <div class="row pb-3">
                <div class="col-12 col-sm-8 col-md-5 ps-5">
                    <div class="card text-start" style={{backgroundColor: 'rgba(255, 0, 0, 0)', border:'none'}}>
                    <div class="card-body pt-5 ps-4">
                            <h1 class="card-title text-light">Grow your brand <br/>presence on social media 😍</h1>
                            <p class="card-text mt-4 mb-4  text-light">Join with more 1200+ happy customers</p>
                            <div className={styles.images} style={{marginBottom: '100px'}}>
                                <img style={imageStyle1} src='https://picsum.photos/id/237/200/300'/>
                                <img style={imageStyle2} src='https://picsum.photos/id/238/200/300'/>
                                <img style={imageStyle3} src='https://picsum.photos/id/239/200/300'/>
                                <img style={imageStyle4} src='https://picsum.photos/id/240/200/300'/>
                                <img style={imageStyle5} src='https://picsum.photos/id/241/200/300'/>
                                <a  style={imageStyle6} href="#" className=" text-light">and other</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-30 col-12 col-sm-4 col-md-7 d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-light btn-lg text-info">Get your trial now</button>
                </div>
            </div>
        </div>
    );
}

export default TrialCard;