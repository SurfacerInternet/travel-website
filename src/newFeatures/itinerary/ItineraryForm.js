import { Field, Form, Formik } from "formik";
import { FormGroup, Label, Col } from "reactstrap"

const ItineraryForm = () => {

return (
    <Formik initialValues={{
        distination: '',
        departure: '',
        activities: '',

    }}
     
    >

    <Form>
        <FormGroup>
            <Label htmlFor="destination"> 
            Destination 
            </Label>
           
                <Field 
                name='destination'
                as='select'
                className='form-control'>
            
                <option>Select...</option>
                <option>Country 1</option>
                <option>Country 2</option>
                <option>Country 3</option>
                <option>Country 4</option>
                <option>Country 5</option>
                </Field>
         
        </FormGroup>

    <FormGroup >
         <Label htmlFor="date">
            Departure Date
        </Label>
          
                <Field
                name='departure'
                placeholder='Date'
                className='form-control'

                 />        
            
    </FormGroup>
                        
    <FormGroup row>
        <Label htmlFor='activities'> 
        Activities
        </Label>
        
            <Field
            name='activities'
            as='textarea'
            rows='12'
            className='form-control'

            />
       
        </FormGroup>

    </Form>

    </Formik>

)
};


export default ItineraryForm;
//the focus on other people, your blindspot you care too much as an INTP
//responsible selfishness


