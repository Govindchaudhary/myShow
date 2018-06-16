import React from 'react';
import {
  Collapse,
  Navbar,
  Button,
  Form,
  Input,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
        <Navbar style={{height:"100px"}} color="dark" light expand="md">
         
          <NavbarBrand  href="/"><p class="text-light bg-dark font-italic">bookmyshow</p></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{marginTop:"20px"}} className="mr-auto" navbar>
            
               <div  class="container">
                 <form class=" my-2 my-lg-0">
                    <input style={{width:"900px",fontSize:"12px"}}  class="form-control form-control-lg mr-sm-2 " type="search" placeholder="Search for Movies,Events,Plays and Sports"   aria-label="Search"/>
                  </form>
                  <div style={{marginLeft:"2px",marginTop:"10px"}} class="row">
                    <a href="#"><p class="text-light bg-dark ">Movies</p></a>
                    <span style={{marginLeft:"25px"}}><a href="#"><p class="text-light bg-dark ">Events</p></a></span>
                    <span style={{marginLeft:"25px"}}><a href="#"><p class="text-light bg-dark ">Plays</p></a></span>
                    <span style={{marginLeft:"25px"}}><a href="#"><p class="text-light bg-dark ">Sports</p></a></span>
                    <span style={{marginLeft:"25px"}}><a href="#"><p class="text-light bg-dark ">Monuments</p></a></span>

                    <span style={{marginLeft:"140px"}}><a href="#"><p style={{fontSize:"13px"}} class=" text-muted   ">Corporates</p></a></span>
                    <span style={{marginLeft:"25px"}}><a href="#"><p style={{fontSize:"13px"}} class=" text-muted  ">Offers</p></a></span>
                    <span style={{marginLeft:"25px"}}><a href="#"><p style={{fontSize:"13px"}} class=" text-muted  ">Gift Cards</p></a></span>

                

                  </div>

                  
               </div>
               <Button style={{height:"30px",marginLeft:"10px"}} color="primary" size="sm">Sign In</Button>
            </Nav>
           
          </Collapse>
        </Navbar>
     
    );
  }
}