import TravelStylesList from "../newFeatures/travelstyles/TravelStylesList";
import { Container, Col, Row } from "reactstrap";
import TravelToursQA from "../newFeatures/traveltours/TravelToursQA";
import TravelTourList from "../newFeatures/traveltours/TravelTourList";
import Group from '../app/assets/img/group-travel.jpg'


const TourPage = () => {
    return(
      <div>  
        <div className="contain"> 
         <img src={Group} alt='group-travel-photo' className="img-fluid" width='max'/>
         <div className="centered">
            Choose Your Adventure
         </div>
        </div>
    <Container>
            <TravelStylesList />  
            <TravelTourList />
            <TravelToursQA />
        </Container>
        </div>
    )
}

export default TourPage;


//clearly see where you are, and where you want to be


// you mind be wrong because youre intellingence is resistant 