import {Container, Row, Col } from 'reactstrap';


const TravelTourDesc = ({item}) => {

const {name, about, quote, scope} = item

    return (
        <Container>
            <Row>
                <Col sm='7'>
                    <div className='head'> 
                          <h2> {name} </h2>   
                    </div>
                    <ul> 
                        <li>
                            {about}
                        </li>
                        <li> 
                            {scope} 
                        </li>
                        
                         <b> </b>
                    </ul>
                </Col>
                <Col sm='5' className='my-auto'>
                <p> <b>

                "{quote}"
                </b>
                
                </p>
              
                
                </Col>
            </Row>
        </Container>  
    )
}

export default TravelTourDesc;