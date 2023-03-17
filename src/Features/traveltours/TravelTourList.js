import { selectAllTourCompanies } from "./TravelToursSlice";
import TravelTourDesc from "./TravelTourDesc";
import {Row, Col} from 'reactstrap'


const TravelTourList = () => {

    const tourcompanies = selectAllTourCompanies();

    return (
       tourcompanies.map((tour) => {
        return (
            <Row key={tour.id}>
                <Col sm='8'> 
                    <TravelTourDesc item={tour} />
                </Col>
            </Row>
        )})
    )
        }

export default TravelTourList;