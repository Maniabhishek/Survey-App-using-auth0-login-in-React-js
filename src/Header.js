import React, { Component } from 'react';

import {Navbar,Nav,NavItem} from 'react-bootstrap';
class Header extends Component {
onLogin(){
  this.props.onLogin();
}
onLogout(){
  this.props.onLogout();
}



  render(){

    let page;
    if(this.props.idToken){
      page=  <NavItem className="loginlogut" onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>
    }else{
      page= <NavItem className="loginlogut" onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
    }
    return(
      <div>
        <Navbar>
            <Navbar.Header>
                  <Navbar.Brand id="name2">Survey</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                {page}

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
