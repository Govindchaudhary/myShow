import axios from 'axios';

export const fetchMovies = () => {
    return async(dispatch)=> {
        const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c9c5650ce713c851cdc52b70ff17614&primary_release_date.gte=2018-05-15&primary_release_date.lte=2018-6-22');
        
        dispatch({type:'FETCH_MOVIES',payload:movies})
    }

}
export const fetchTrailer = (movieId) => {
    
    return async(dispatch)=> {
        const trailers = await axios.get('http://api.themoviedb.org/3/movie/'+movieId.toString()+'/videos?api_key=2c9c5650ce713c851cdc52b70ff17614');
        console.log(trailers);
        dispatch({type:'FETCH_TRAILERS',payload:trailers})
    }
}