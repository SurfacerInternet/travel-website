import { selectAllTourStyles } from './TravelStylesSlice';
import TravelStylesCard from './TravelStylesCard'; //not passed with styles array yet
import {Row, Col} from 'reactstrap'


const TravelStylesList = () => {
    const tourstyles = selectAllTourStyles();
    return (   
        <Row>
            {tourstyles.map((styles) => {
                return (
                    <Col md = '8'
                    className='m-4'>
                    <TravelStylesCard item={styles} /> 
                    </Col>
                )
            }

            )
        }
        </Row>
    )
}

//the item is each object inthe TOURSTYLES array. 
    
export default TravelStylesList;