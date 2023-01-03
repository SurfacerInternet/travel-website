import { Container, Row, Col,} from "reactstrap";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <Container>
            <Row className="row-content">
                <Col sm='4' className="text-white">
                  <h3> Get Travel Tips</h3>
                  <p> Make more of your trip with useful knowledge</p>
                </Col>
                <Col sm='4' className="text-white">
                   <h3> Discover Travel Options </h3>
                   <p> Check out cool options for your dream trip </p>
                </Col>
                <Col sm='4' className="text-white">
                    <h3> Plan Your Trip</h3>
                    <p> Make planning painless by making a travel itinerary</p> 
                </Col>
            </Row>
        </Container>

    )
};

export default HomePage;