import {Container, Row, Col } from 'reactstrap';


const TravelTourDesc = ({item}) => {

const {name, about, quote, scope, image} = item

    return (
        <Container>
            <Row>
                <Col>
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
                <Col >
                <p> <b>

                "{quote}"
                </b>
                </p>
                </Col>
                <Col>
                <Card>
                    <CardImg src={image}>
                    </CardImg>
                </Card>
                </Col>
            </Row>
        </Container>  
    )
}


export default TravelTourDesc;
