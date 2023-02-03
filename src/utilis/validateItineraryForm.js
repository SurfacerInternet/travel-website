export const validateItineraryForm = (values) => {
    const errors = {};

    if(!values.destination) {
        errors.destination = "Select one country";
    }
    if(!values.departure) {
        errors.departure = "Provide a departure date"
    }
    if(!values.date) {
        errors.date = "Pick date"
    }
    if(!values.duration) {
        errors.duration = "Provide trip duration"
    }
    if(!values.activities) {
        errors.activities = "Enter an activity"
    }

    return errors;
}

// its all patterns
//there is no greater force than the force to survive