import { configureStore } from '@reduxjs/toolkit';
import { itineraryReducer } from '../Features/itinerary/itineraryReducer';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        itinerary: itineraryReducer,
    },

middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})