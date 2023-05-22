import { FormGroup, Label, Button, Col } from "reactstrap";
import { useState } from "react";


const ItineraryForm = () => {

  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activities, setActivities] = useState('');
  const [itinerary, setItinerary] = useState(' ');



  const handleSubmit = (event) => {
    event.preventDefault();
    setItinerary(`Your Itinerary: Destination: ${destination}, Start Date: ${startDate}, End Date: ${endDate}, Activities: ${activities} `);
    setDestination('');
    setStartDate('');
    setEndDate('');
    setActivities('');

  };

  //upon hitting submit the fields will be empty


  return (

    <form

      onSubmit={handleSubmit}>

      <FormGroup>
        <Label htmlFor="destination">  Destination </Label>

        <input
          type="text"
          id="destination"
          name="destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Select country..."
          as="select"
          className="form-control"
        />

      </FormGroup>

      <FormGroup>
        <Label htmlFor="startDate">Start Date</Label>

        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          className="form-control"
        />

      </FormGroup>

      <FormGroup>
        <Label htmlFor="endDate">End Date</Label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          className="form-control"
        />

      </FormGroup>


      <Label htmlFor="activities">Activities</Label>
      <input
        name="activities"
        id="activities"
        value={activities}
        as='textarea'
        rows='12'
        onChange={(event) => setActivities(event.target.value)}
        className='form-control'
      />



      <Button type='submit' color='primary'>
        Submit
      </Button>

      <Col>
        <h3> {itinerary} </h3>
      </Col>

    </form>

  )
}


export default ItineraryForm;
