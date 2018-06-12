import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Survey from './components/Survey.js';
import Auth0Lock from 'auth0-lock';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken:'',
      profile:{}
    };
  }
static defaultProps={
  clientID:'kwX3pfGfQ8OF7j0NPeysH527Wfb7wyxl',
  domain:'mani9797.auth0.com'
}
componentWillMount(){
  this.lock=new Auth0Lock(this.props.clientID,this.props.domain);
  this.lock.on('authenticated',(authResult)=>{
    this.lock.getProfile(authResult.idToken,(error,profile)=>{
      if(error){
        return;
      }
      this.setProfile(authResult.idToken,profile);
    });
  });
  this.getProfile();
}

setProfile(idToken,profile){

  localStorage.setItem('idToken',idToken);
  localStorage.setItem('profile',JSON.stringify(profile));
  this.setState({
    idToken:localStorage.getItem('idToken',idToken),
    profile:JSON.parse(localStorage.getItem('profile'))

  })



}
getProfile(){
  if(localStorage.getItem('idToken')!=null){
    this.setState({
      idToken:localStorage.getItem('idToken'),
      profile:JSON.parse(localStorage.getItem('profile'))
    })
  }
}
showLock(){
  this.lock.show();
}

onLogout(){
  this.setState({
    idToken:'',
    profile:''
  },()=>{
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
  })
}




  render() {
    let gitty;
    if(this.state.idToken){
      gitty=<Survey/>
    }else{
      gitty=<h1>Click On Login to Give us your feedback</h1>
    }


    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To PaperTalk feedback form</h1>
        </header>
        <Header

          lock={this.lock}
          onLogout={this.onLogout.bind(this)}
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogin={this.showLock.bind(this)}

          />
        {gitty}
      </div>
    );
  }
}

export default App;
