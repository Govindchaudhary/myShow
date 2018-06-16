import React, { Component } from 'react';
import {Route,Switch,withRouter,redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/Header';
import MyCarousel from './components/Carousel';
import MovieList from './components/MovieList';
import Root from './components/Root';
import MovieDetail from './components/MovieDetail';


class App extends Component {
  
  render() {
    let routes = (
    <Switch>
      <Route path="/movie/:id" component={MovieDetail}/>
      <Route path="/" exact component={Root}/>


    </Switch>
    );
    return (

      <div>
       {routes}
       </div>
      
      
    );
  }
}
const mapStateToProps = (store)=> {

  console.log(store);
  return({
    movies:store.movies
  })
}

export default withRouter(connect(mapStateToProps)(App));
