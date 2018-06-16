import React from 'react';


const MyCard = (props) => {
  return (
    
    <div class="card  " style={{width:"18rem",marginLeft:"20px"}}>
                         <img class="card-img-top" style={{height:"200px"}} src={props.img} alt="Card image cap"/>
                          <div class="card-body" >
                          <h6 class="card-title">{props.title}</h6>
                          
                         </div>
                         <a href="#" style={{width:"100%",marginBottom:"0"}} class="btn btn-danger">Book Now</a>
    </div>
    
  );
};

export default MyCard;