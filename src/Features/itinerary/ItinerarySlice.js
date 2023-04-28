import { createSlice } from "@reduxjs/toolkit";
import { ITINERARY } from "../../app/shared/ITINERARIES"


const initialState = {
    itineraryObject: ITINERARY
}

const itinerarySlice = createSlice({
    name: 'itinerary',
    initialState,
    reducers: {
        addItinerary: (state, action) => {
          
            const newItinerary = {
                ...action.payload
             };
             state.itineraryObject = newItinerary;
            
        }
    }
});

export const itineraryReducer = itinerarySlice.reducer

export const { addItinerary } = itinerarySlice.actions

export const selectItinerary = (state) => {
    return state.itinerary.itineraryObject;
   
}
