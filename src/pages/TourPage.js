import Group from '../app/assets/img/group-travel.jpg';
import { Container, Col, Row } from "reactstrap";
import TravelStylesList from "../newFeatures/travelstyles/TravelStylesList";
import TravelTourList from "../newFeatures/traveltours/TravelTourList";
import TravelToursQA from "../newFeatures/traveltours/TravelToursQA";




const TourPage = () => {
    return(
      <div>  
        <div className="contain"> 
         <img src={Group} alt='group-travel-photo' className="img-fluid" width='max'/>
         <div className="centered">
            Choose Your Adventure
         </div>
        </div>
    <Container>
        <Row>
            <Col>
                <h2> What type of unique travel are you seeking? </h2>
            </Col>
        </Row>
        <Row className='mt-5'> 
            <TravelStylesList/>  
        </Row>
        <Row>
            <Col>
                <h2> Here are some tour companies that can offer the travel style & destination you want </h2>
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