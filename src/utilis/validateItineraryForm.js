export const validateItineraryForm = (values) => {
    
    const errors = {};
    
    if(values.destination) {
        errors.destination = "Specify a destination.";
    }
    if(!values.startDate) {
        errors.startDate = "Pick a start date."
    }
    if(!values.endDate) {
        errors.endDate = "Pick an end date."
    }
    if(!values.activities) {
        errors.activities = "Enter activity."
    }

    return errors;
}

// its all patterns
//there is no greater force than the force to survive

//you like Lord of the rings, star wars , yada yada. 
// what is your quest wht is your ring , tie to evil that you are trying to fight agaisnt so it doesnt
//destroy you or those you know. 