

export const itineraryComponent = (values) => {

    const [destination, startDate, endDate, activities] = values;

    return(
       <>
            <h2> Your Itinerary </h2>
            <p> {destination} </p> 
            <p> {startDate}</p>
            <p> {endDate} </p>
            <p> {activities}</p>
         </>
     
    )

}