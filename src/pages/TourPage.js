import Group from '../app/assets/img/group-travel.jpeg';
import { Container, Col, Row } from "reactstrap";
import TravelStylesList from "../Features/travelstyles/TravelStylesList";
import TravelTourList from "../Features/traveltours/TravelTourList";
import TravelToursQA from "../Features/traveltours/TravelToursQA";



const TourPage = () => {
    return (
        <div>
            <div className="contain">
                <img src={Group} alt='group-travel-photo' className="img-fluid" width='max' />
                <div className="centered">
                    Choose Your Adventure
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h2> What type of travel are you seeking? </h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <TravelStylesList />
                </Row>
                <Row className='m-3'>
                    <Col>
                        <h2> How can you make your chosen travel style happen?</h2>
                    </Col>
                </Row>
                <Row className='m-3'>
                    <Col>
                        <h2> What if you dont want to worry about all the details of booking flights, accomodations for the place youre staying?</h2>
                    </Col>
                </Row>
                <Row className='m-3'>
                    <Col>
                        <h2> Here are some tour companies that can offer the travel style & journey you want </h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <TravelTourList />
                </Row>
                <Row className='mt-5'>
                    <TravelToursQA />
                </Row>
            </Container>
        </div>
    )
}

export default TourPage;


//clearly see where you are, and where you want to be
// you mind be wrong because youre intellingence is resistant 