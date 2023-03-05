import {Container, Row, Col } from 'reactstrap';


const TravelTourDesc = ({item}) => {

const {name, about, quote, scope} = item

    return (
        <Container>
            <Row>
                <Col>
                    <div className='head'> 
                            {name} 
                    </div>
                    <ul> 
                        <li>
                            {about}
                        </li>
                        <li> 
                            {scope} 
                        </li>
                        
                         <b>"{quote}" </b>

                    </ul>
                </Col>
            </Row>
        </Container>  
    )
}

export default TravelTourDesc;