import { selectAllTourStyles } from './TravelStylesSlice';
import TravelStylesCard from './TravelStylesCard'; //not passed with styles array yet
import {Row, Col} from 'reactstrap'


const TravelStylesList = () => {
    const tourstyles = selectAllTourStyles();
    return (   
        <Row className='ms-auto'>
        {tourstyles.map((styles) => {
            return (
                <Col md='6' key={styles.id}>     
                    <TravelStylesCard item={styles} />
                    </Col>          
            )
        })
        }
        </Row>      
    )
}

//the item is set equal to each object inside the TOURSTYLES array. 
    
export default TravelStylesList;

const object = {
    color: 'Red',
    size: 19,
    material: true
}
