import React, { Component } from 'react'
import YouTube from 'react-youtube'
import * as actions from '../actions';
import '../App.css'
import {connect} from 'react-redux'

class MovieTrailer extends Component {
  
  componentWillMount(){
    this.props.fetchTrailer(this.props.movieId)
  }
  
  render () {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    
   if(this.props.trailers) {
    return (
      <div className='App'>
        <h1 className='heading'>Awesome Demo</h1>
        <div  id='player-wrapper'>
          <YouTube
            className='player'
            id='player'
            videoId={this.props.trailers[0].key}
            opts={opts}
            
          />
        </div>
      </div>

    )
}
else{
  return(<div></div>);
}
    
  
  }
  
}
const mapStateToProps = (store) => {
  
  console.log(store);
    return({
       
        trailers:store.trailers
    })
}

export default connect(mapStateToProps,actions) (MovieTrailer)
