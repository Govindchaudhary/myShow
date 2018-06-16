 const trailerReducer = (state=null,action) => {
    switch(action.type) {
       
        case 'FETCH_TRAILERS':
          return action.payload.data.results;
         default:
         return state;
    }
}


export default trailerReducer;