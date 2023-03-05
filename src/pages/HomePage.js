import Thailand from '../app/assets/img/thailand.jpg';
import { Route } from "react-router-dom";
import { Container, Row, Col, Button,} from "reactstrap";
import ItineraryButton from '../newFeatures/itinerary/ItineraryButton';

const HomePage = () => {

    return ( 
       <div>
            <div className="contain">   
                 <img src={Thailand} alt='Thailand' className="img-fluid" width='max'/>
                 <div className="centered"> Travel Wiz </div>
            </div>
            <Row className="row-content p-4 border-right" >
                <Col sm='4'>
                  <h3> Get Travel Tips</h3>
                  <p> Make more of your trip with useful knowledge</p>
                </Col>
                <Col sm='4' >
                   <h3> Discover Travel Options </h3>
                   <p> Check out cool options for your dream trip </p>
                </Col>
                <Col sm='4'>
                    <h3> Make an Itinerary</h3>
                    <p> Make planning painless by making a travel itinerary</p> 
                  
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItineraryButton />
                </Col>
            </Row>
            </div>
                
    )
};

export default HomePage;


