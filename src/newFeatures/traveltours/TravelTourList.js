import { selectAllTourCompanies } from "./TravelToursSlice";
import TravelTourDesc from "./TravelTourDesc";
import {Row, Col} from 'reactstrap'


const TravelTourList = () => {

    const tourcompanies = selectAllTourCompanies();

    return (
       tourcompanies.map((tour) => {
        return (
            <Row>
                <TravelTourDesc item={tour} />
            </Row>
        )})
    )
        }

export default TravelTourList;