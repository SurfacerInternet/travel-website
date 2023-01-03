import { selectAllTourStyles } from './TravelStylesSlice';
import TravelStylesCard from './TravelStylesCard'; //not passed with styles array yet
import { Container, Row, Col} from 'reactstrap'


const TravelStylesList = () => {
    const tourstyles = selectAllTourStyles();
    return (   
        <Container>
        <Row>
            {tourstyles.map((styles) => {
                return (
                    <Col md='8' className='m-4' key={styles.id}>
                        <TravelStylesCard item={styles} /> 
                    </Col>
                )
            }

            )
        }
        </Row>
        </Container>
    )
}

//the item is each object inthe TOURSTYLES array. 
    
export default TravelStylesList;