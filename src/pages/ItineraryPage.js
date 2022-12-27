import { Formik } from "formik"
import { Form, FormGroup, Label } from "reactstrap"


const ItineraryForm = () => {
    return(
        <Formik>
            <Form>

                <FormGroup>
                    <Label for="destination"> Destination</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="departure"> Departure </Label>
                </FormGroup>

                <FormGroup>
                    <Label for="duration"> Duration </Label>
                </FormGroup>
            </Form>

        </Formik>
        
    )
}