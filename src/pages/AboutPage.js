import { Row, Col } from 'reactstrap';
import city from '../app/assets/img/city.jpeg'

const AboutPage = () => {

    return (

        <div>
            <div className='header-image'
                    style={{
                    backgroundImage: 'url(' + city + ')',
                    backgroundSize: "cover",
                    height: '500px'
                }}
            >
                <div className="header-text">
                        About              
                </div>
            </div>
            <Row>
                <Col className='col-sm-6 mx-auto mt-4'>
                    <div className='body-text'>
                        <p>Travel Wiz can help you discover the type of travel experience best suited for you based on your unique interests and goals. </p>
                          
                           <p> Do you like to explore forest regions, or are you more energized by urban adventures?  </p>

                        <p>
                            Do want to experience more of the local cuisine of a country or you wish to focus more on sightseeing? <br></br>

                        </p>
                        <p>
                            Discover travel tour companies offering pre-made itineraries and choose the tour and destination suited for you.  </p>
                           
                           <p>Want to travel solo? Then start planning your trip with our travel itinerary.</p>

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default AboutPage;



