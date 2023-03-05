import Trip from '../app/assets/img/Trip.jpg'
import { Container, Row, Col } from "reactstrap";
import ItineraryForm from "../newFeatures/itinerary/ItineraryForm";


const ItineraryPage = () => {
    return (

        <div>
            <img src={Trip} alt='trip-photo' className="img-fluid" width='max' />
            <h1 className="centered"> MAKE YOUR OWN ITINERARY </h1>



            <Row>
                <Col sm='4' className='mx-auto'>
                    <ItineraryForm />
                </Col>
            </Row>


            <Row>
                <Col sm='12' className="text-center">
                    <h3> Traveling with a group has benefits but  traveling solo has its advantages.</h3>
                    <h3>You get to: </h3>
                    <div className="col-sm-5 mx-auto border ">
                        <p className="d-none d-sm-block">
                            - Control your own schedule </p>
                        <p> - Cater activities to your own personal interests </p>
                        <p> - Expand your comfort zone</p>
                        <p> - Experience less drama and focus more on exploring </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default ItineraryPage;



// Add modal,
// HTTP, JSON, Server-Communication
//THese things make web faster and store + retrieve information.



//YOu should be carglass(some dirt, smuges here and there, but overall clear) clear about where you are and where you want to go 