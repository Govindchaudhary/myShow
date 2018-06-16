import React,{Component} from 'react';
import * as  actions from '../actions';
import {connect} from 'react-redux';
import MyCard from './MyCard';
import Sidebar from './Sidebar';

class MovieList extends React.Component {

    componentDidMount() {
        this.props.fetchMovies();
    }
    
    renderMovies ()  {
        if(this.props.movies) {
        return(
            
            this.props.movies.slice(0,12).map((movie)=> {
                const img = "https://image.tmdb.org/t/p/original" + movie.poster_path;
                return(
                    <MyCard
                     img = {img}
                     title = {movie.title}
                    />
                )
            })
        )
    }
}
 

    render() {
      

       
        return(
            <div class="row" style={{marginTop:"40px"}}>
              <Sidebar />
              <div class= "col-8" style={{marginLeft:"0px"}}>
              <div  class="jumbotron">
                <div class="row">
               

                {this.renderMovies()}
                </div>
                </div>
              </div>
              
            </div>
        )
    }

};

const mapStateToProps = (store) => {
   console.log(store);
    return (
        {
            movies:store.movies
        }
    );

};
export default connect(mapStateToProps,actions)(MovieList);