

const Itinerary = ({itinerary}) => {
    const { destination, departure, returnd, activities } = itinerary

    return (
        <div>
           <p>Destination: {destination} </p> 
           <p>Departure:  {departure} </p>
           <p>Return Date: {returnd} </p>
           <p>Activities:  {activities}</p>
        </div>

    )

}
export default Itinerary;