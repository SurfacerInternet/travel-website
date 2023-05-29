import { Row, Col } from 'reactstrap';
import quito from '../app/assets/img/quito.jpeg'

const AboutPage = () => {

    return (

        <div>
            <div className='header-image'
                    style={{
                    backgroundImage: 'url(' + quito + ')',
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
                        <p>Travel Wiz is a place for aspiring travelers looking for new traveling ideas and who want to explore their unique travel personality.
                            Travel Personality is how you specifically would like to travel in an ideal world. </p>

                        <p> This site can help you discover the type of travel experience best suited for you or your group based on your unique interests and goals. </p>
                          
                           <p> Do you like to explore forest regions, or are you more energized by urban adventures?  </p>

                        <p>
                            Do want to experience more of the local cuisine of a country or you wish to focus more on sightseeing must see places? <br></br>

                        </p>
                        <p>
                            Discover travel tour companies offering jam-packed itineraries and pick the one tour with the travel style best for you. </p>
                           
                           <p>Want to travel solo? Know the advantages and challenges then start planning your trip with our travel itinerary</p>

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default AboutPage;

