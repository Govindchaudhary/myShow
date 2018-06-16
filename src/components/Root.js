import React, { Component } from 'react';

import Header from './Header';
import MyCarousel from './Carousel';
import MovieList from './MovieList';


class Root extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div >
        <MyCarousel/>
        </div>
        <div>
          <MovieList/>
        </div>
        
      </div>
      
    );
  }
}

export default Root;
