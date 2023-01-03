import TravelStylesList from "../newFeatures/travelstyles/TravelStylesList";
import { Container } from "reactstrap";
import TravelToursList from "../newFeatures/traveltours/TravelToursList";

const TourPage = () => {
    return(
       <Container>
        <TravelStylesList />  
        <TravelToursList />
       </Container>
    )
}

export default TourPage;