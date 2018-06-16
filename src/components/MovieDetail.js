import React,{Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MovieTrailer from './MovieTrailer';

class MovieDetail extends React.Component {
    componentDidMount() {

        this.props.fetchTrailer(this.props.match.params.id)
        this.props.fetchMovies();
      }
    
    
    
    renderDetail() {
        if(this.props.movies)
        {
            return(
                this.props.movies.map((movie)=> {
                    const img = "https://image.tmdb.org/t/p/original" + movie.poster_path;
                    if(movie.id==this.props.match.params.id) {
                        
                        return(
                            <div>

                                
                                <MovieTrailer  />
                                
                            </div>
                        );
                    }
                })

            );
            
        }
    }
    render()
    {
        return(
            <div>
                <Header/>
                {this.renderDetail()}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    
    console.log(store);
    return(
        {
            movies:store.movies,
            trailers:store.trailers
        }
    )
}

export default connect(mapStateToProps,actions)(MovieDetail);