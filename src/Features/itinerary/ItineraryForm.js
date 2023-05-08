import { useState } from "react";


 ItineraryForm = () => {
     
  const [itinerary, setItinerary] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    activities: 'test, test'
  });
  
  return (
    <>
      <form>
        <div>
        <label htmlFor="destination">Destination</label>
          <input 
            type="text" 
            name="destination"
            id="destination" 
            value={itinerary.destination} 
            onChange={e => { 
              setItinerary({
                ...itinerary,
                destination: e.target.value
              });
            }} 
          />
        </div>
        
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input 
            type="date" 
            name="startDate"
            id="startDate" 
            value={itinerary.startDate} 
            onChange={e => {
              setItinerary({
                ...itinerary,
                startDate: e.target.value
              });
            }}
          />
        </div>
        
        <div>
          <label htmlFor="endDate">End Date</label>
          <input 
            type="date" 
            name="endDate"
            id="endDate" 
            value={itinerary.endDate} 
            onChange={e => {
              setItinerary({
                ...itinerary,
                endDate: e.target.value
              })
            }}
          />
        </div>
        
        <div>
        <label htmlFor="activities">Activities</label>
          <input 
            type="text" 
            name="activities"
            id="activities" 
            value={itinerary.activities} 
            onChange={e => { 
              setItinerary({
                ...itinerary,
                activities: e.target.value
              });
            }} 
          />
        </div>
      </form>
      <div>
        <h2>Your Itinerary: </h2>
        <p>Destination: {itinerary.destination} </p> 
        <p>Leave Date:  {itinerary.startDate} </p>
        <p>Return Date: {itinerary.endDate} </p>
        <p>Activities:  {itinerary.activities}</p>
      </div>
    </>
  )
}

export default ItineraryForm;
