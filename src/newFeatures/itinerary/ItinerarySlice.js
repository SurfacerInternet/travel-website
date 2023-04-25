// import {createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     itineraryArray: [],
// };

// const itinerarySlice = createSlice({
//     name: 'itinerary',
//     initialState,
//     reducers: {
//         addItinerary: (state, action) => {

//             console.log('addItinerary action.payload', action.payload);
//             console.log('addItinerary state.itineraryArray', state.itineraryArray);
        
//             const newItinerary = {id: state.itineraryArray.length + 1,
//                 ...action.payload
//                 };
//                 state.itineraryArray.push(newItinerary);
        
//         }
//     }
// })

// export const itineraryReducer = itinerarySlice.reducer;

// export const { addItinerary } = itinerarySlice.actions;