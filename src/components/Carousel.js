import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://in.bmscdn.com/showcaseimage/eventimage/jurassic-world-fallen-kingdom-06-06-2018-12-37-38-566.jpg',
    
  },
  {
    src: 'https://in.bmscdn.com/showcaseimage/eventimage/disney-aladdin-08-06-2018-07-53-19-701.jpg',
    
  },
  {
    src: 'https://in.bmscdn.com/showcaseimage/eventimage/race-3-08-06-2018-09-18-33-207.jpg',
    
  },

  {
    src: 'https://in.bmscdn.com/showcaseimage/eventimage/mughal-e-azam-06-06-2018-07-34-11-276.jpg',
    
  },
  {
    src: 'https://in.bmscdn.com/showcaseimage/eventimage/poomaram-28-03-2018-02-37-55-595.jpg',
    
  }
];

const MyCarousel = () => {
  return(
    <div style={{marginTop:"5px",height:"299px",width:"767px",marginLeft:"220px"}}>
      <UncontrolledCarousel items={items} />;
    </div>
  )
  

}

export default MyCarousel;