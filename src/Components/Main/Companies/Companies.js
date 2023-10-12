import {Col,Container,Image ,Row} from 'react-bootstrap';
import googleImage from "./CompaniesImages/Google.svg"
import airbnbImage from "./CompaniesImages/Airbnb.svg"
import slackImage from "./CompaniesImages/Slack.svg"
import netflixImage from "./CompaniesImages/Netflix.svg"
import uberImage from "./CompaniesImages/Uber.svg"
function Companies(){
    return (
        <div>
            <Container style={{paddingTop: '7em',paddingBottom: '7em'}}>
                <Row className="d-flex justify-content-center">
                    <Col xs={8} sm={6} lg={2} md={4} className="mt-sm-0 mt-lg-0">
                        <Image src={slackImage}/>
                    </Col>
                    <Col xs={8} sm={6} lg={2} md={4} className="mt-4 mt-sm-0 mt-lg-0">
                        <Image src={netflixImage}/>
                    </Col>
                    <Col xs={8} sm={6} lg={2} md={4} className="mt-4 mt-lg-0 mt-md-0 mt-sm-4">
                        <Image src={googleImage}/>
                    </Col>
                    <Col xs={8} sm={6} lg={2} md={4} className="mt-4 mt-lg-0 mt-md-4 mt-sm-4">
                        <Image src={airbnbImage}/>
                    </Col>
                    <Col xs={8} sm={6} lg={3} md={4} className="mt-4 mt-lg-0 mt-md-4 mt-sm-4">
                        <Image src={uberImage}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Companies;