import { selectAllTourCompanies } from "./TravelToursSlice";
import TravelTourDesc from "./TravelTourDesc";
import {Row, Col} from 'reactstrap'


const TravelTourList = () => {

    const tourcompanies = selectAllTourCompanies();

    return (
       tourcompanies.map((tour) => {
        return (
            <Row key={tour.id} className='m-2'>
                    <TravelTourDesc item={tour} />   
            </Row>
        )})
    )
        }

export default TravelTourList;
