 const movieReducer = (state=null,action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
          return action.payload.data.results;
        case 'FETCH_TRAILERS':
          return action.payload.data.results;
         default:
         return state;
    }
}


export default movieReducer;