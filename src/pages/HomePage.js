import Thailand from '../app/assets/img/thailand.jpeg';
import { Route, Routes, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ItineraryButton from '../Features/itinerary/ItineraryButton';
import TourPage from './TourPage';
import AboutPage from './AboutPage';
import ItineraryPage from './ItineraryPage';

const HomePage = () => {

    return (
        <div>
            <Col className='m-5'>
            <h3>  Solo & Group Travel Guide </h3>
            </Col>
            <div className="contain">
                <img src={Thailand} alt='Thailand' className="img-fluid" width='max' />
            </div>

            <Row className="row-content p-4 border-right" >

                <Col sm='4'>
                    <h2> Get Traveling Tips</h2>
                    <p> Make more of your trip with useful knowledge</p>
                    <Link to='about'>
                         <p className='btn btn-outline-success btn-lg'>GET TIPS</p>
                    </Link>
                    <Routes>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </Col>

                <Col sm='4' >
                    <h2> Discover Travel Options </h2>
                    <p> Check out cool options for your dream trip </p>
                    <Link to='/tours'>
                    <p className='btn btn-outline-success btn-lg'>SEE OPTIONS</p>
                    </Link>
                    <Routes>
                        <Route path='tours' element={<TourPage />} />
                    </Routes>
                </Col>

                <Col sm='4'>
                    <h2> Make an Itinerary</h2>
                    <p> Make planning painless ]through a travel itinerary</p>
                    <Link to='/itineraryForm'>
                    <p className='btn btn-outline-success btn-lg'>MAKE ITINERARY</p>
                    </Link>
                    <Routes>
                        <Route path='/itineraryForm' element={<ItineraryPage />} />
                    </Routes>
                </Col>
            </Row>
        </div>

    )
};

export default HomePage;
