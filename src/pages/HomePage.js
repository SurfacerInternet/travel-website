import Thailand from '../app/assets/img/thailand.jpeg';
import { Route, Routes, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import TourPage from './TourPage';
import AboutPage from './AboutPage';
import ItineraryPage from './ItineraryPage';

const HomePage = () => {

    return (
        <div>
            <Col className='m-5'>
            <h3 className='title'>  Solo & Group Travel Guide </h3>
            </Col>
            <div className="contain">
                <img src={Thailand} alt='Thailand' className="img-fluid" width='max' />
            </div>

            <Row className="row-content p-4 border-right" >

                <Col sm='4'>
                    <h2> Get Traveling Tips</h2>
                    <p> Make more of your trip with useful knowledge from our partner website</p>
                    <a href='https://firsttimetravelsolutions.com'>
                        <p className='btn btn-outline-success btn-lg'><b>GET TIPS</b></p>
                   </a>
                </Col>

                <Col sm='4' >
                    <h2> Discover Travel Options </h2>
                    <p> Check out neat tour options to make your dream trip possible. </p>
                    <Link to='tours'>
                    <p className='btn btn-outline-success btn-lg'><b>SEE OPTIONS</b></p>
                    </Link>
                    <Routes>
                        <Route path='tours' element={<TourPage />} />
                    </Routes>
                </Col>

                <Col sm='4'>
                    <h2> Make an Itinerary</h2>
                    <p> Make planning painless by making a travel itinerary.</p>
                    <Link to='/itineraryForm'>
                    <p className='btn btn-outline-success btn-lg'><b>MAKE ITINERARY</b></p>
                    </Link>
                    <Routes>
                        <Route path='itineraryForm' element={<ItineraryPage />} />
                    </Routes>
                </Col>
                
            </Row>
        </div>

    )
};

export default HomePage;

