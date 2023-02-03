import  ItineraryForm  from "../newFeatures/itinerary/ItineraryForm";
import { Container, Row, Col } from "reactstrap";
import Trip from '../app/assets/img/Trip.jpg'

const ItineraryPage = () => {
    return(
       <div>
        <div className="contain">
           <img src={Trip} alt='trip-photo' className="img-fluid" width='max' />
           <div>
           <h1 className="centered"> MAKE YOUR OWN ITINERARY </h1>
            </div> 
        </div>
           <Container>
            <Row>
                <Col sm='12' className="text-center">
                   
                    <h3> Traveling with a group has benefits but traveling solo has its advantages. </h3>
                    <h3>You get to: </h3>

                    <div class= "col-sm-5 mx-auto border " >
                        <p class="d-none d-sm-block"> - Control your schedule </p> 
                        <p> - Expand your comfort zone</p>
                        <p> - Cater to your own interests more</p>
                        <p> - Have less drama and focus more on exploring </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3> Itinerary Form </h3>
                </Col>
            </Row>
                <ItineraryForm />
            </Container>
        </div>
    )
}


export default ItineraryPage;



// Add modal,
// HTTP, JSON, Server-Communication
//THese things make web faster and store + retrieve information. 