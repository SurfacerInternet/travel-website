import Group from '../app/assets/img/group-travel.jpeg';
import { Container, Col, Row } from "reactstrap";
import TravelStylesList from "../Features/travelstyles/TravelStylesList";
import TravelTourList from "../Features/traveltours/TravelTourList";
import TravelToursQA from "../Features/traveltours/TravelToursQA";



const TourPage = () => {
    return (
        <div>
            <div className='header-image'
                style={{
                    backgroundImage: 'url(' + Group + ')',
                    backgroundSize: "cover",
                    height: '500px'
                }}
            >
                <div className='header-text'>
                    Choose Your Adventure
                </div>
            </div>
            <Container>
                <Row>
                    <Col className='col-sm-6' >
                        <h2> What type of travel are you seeking? </h2>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <TravelStylesList />
                </Row>

                <Row className='m-3'>
                    <Col id='tour' sm='4' >
                         How can you make your dream travel trip happen?
                    </Col>

                    <Col id='tour' sm='4'>
                        Don't want to worry about all the details of flights, accomodations, or transportion?
                    </Col>

                    <Col id='tour' sm='4'>
                        What resources or agencies are there than help me plan my journey?
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