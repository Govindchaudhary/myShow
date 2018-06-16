import {combineReducers}  from 'redux';
import movieReducer from  './movieReducer';
import trailerReducer from './trailerReducer';

export const allReducers = combineReducers( {
    movies:movieReducer,
    trailers:trailerReducer

});