import Trip from '../app/assets/img/Trip.jpeg'
import { Row, Col } from "reactstrap";
import ItineraryForm from "../Features/itinerary/ItineraryForm";
import Itinerary from '../Features/itinerary/Itinerary';
import { useSelector } from 'react-redux';
import { selectItinerary } from '../Features/itinerary/ItinerarySlice';


const ItineraryPage = () => {

const currentItinerary = useSelector(selectItinerary);

    return (
        <div>
            <div className='header-image'
                style={{
                    backgroundImage: 'url(' + Trip + ')',
                    backgroundSize: "cover",
                    height: '500px'
                }}
            >
                <div className="header-text">
                    MAKE YOUR ITINERARY
                </div>
            </div>

            <Row>
                <Col sm='12' className="text-center mt-3 p-4">
                    <h2> Traveling with a group has benefits but traveling solo has its advantages.</h2>
                    <h2> You get to: </h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-5 mx-auto border ">
                    <p> - Control your own schedule </p>
                    <p> - Cater activities to your own personal interests </p>
                    <p> - Expand your comfort zone</p>
                    <p> - Experience less drama and focus more on exploring </p>
                </Col>


                <Col sm='6' className='mx-auto mt-3'>
                    <ItineraryForm />
                </Col>
            </Row>

            <Row>

                <Col sm='12'>
                    <Itinerary itinerary={currentItinerary}/>
                </Col>
            </Row>


        </div>
    )
}

export default ItineraryPage;
