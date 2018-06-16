import React,{Component} from 'react';
import {connect} from 'react-redux';

class Sidebar extends React.Component {
    
    renderMoviesName ()  {
        if(this.props.movies) {
        return(
            
            this.props.movies.slice(0,12).map((movie)=> {
                const link="/movie/"+movie.id.toString();
                return(
                    <div>
                        <div class="row" >
                        <img style={{height:"18px"}} src ="https://emojipedia-us.s3.amazonaws.com/thumbs/60/google/119/heavy-black-heart_2764.png"/>
                        <p style={{marginLeft:"10px"}}>
                            {(movie.vote_average)*10 + "%"}
                        </p>
                        <a href={link} style={{marginLeft:"10px"}}><p class="text-dark" style={{fontSize:"13px"}}>{movie.title}</p></a>
                        </div>
                        <hr/>
                    </div>

                )
            })
        );
    };
}
    render() {
        return(
            <div class="col-4">
              <div class="jumbotron">
                
                {this.renderMoviesName()}
              </div>
          </div>
        );
    };

};
const mapStateToProps = (store) => {
    
    
     return (
         {
             movies:store.movies
         }
     );
 
 };

export default connect(mapStateToProps)(Sidebar);