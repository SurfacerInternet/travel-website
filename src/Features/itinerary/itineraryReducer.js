const initialState = {
    destination: '',
    startDate: '',
    endDate: '',
    activities: ''
  };
  
  export const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_ITINERARY':
        return {
          ...state,
          destination: action.payload.destination,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          activities: action.payload.activities
        };
      default:
        return state;
    }
  };
