import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

var firebase=require('firebase');
var uuid=require('uuid');
var config = {
   apiKey: "AIzaSyBfqYBjsNasbbHsd6UzcuCw1ANG2pJl57I",
   authDomain: "college-project-d114e.firebaseapp.com",
   databaseURL: "https://college-project-d114e.firebaseio.com",
   projectId: "college-project-d114e",
   storageBucket: "college-project-d114e.appspot.com",
   messagingSenderId: "258225620444"
 };
 firebase.initializeApp(config);

class Survey extends Component {
  qwestionSubmit(event){
    firebase.database().ref('survey2/'+this.state.uid).set({
      userName:this.state.userName,
      answers:this.state.answers,
      bookName:this.state.bookName,
      bookbought:this.state.bookbought,
      info:this.state.info,
      userbookname:this.state.userbookname,
      experience:this.state.experience,
      userbooklink:this.state.userbooklink
    })
    this.setState({
      issubmitted:true
    })
  }

answerSelected(event){
  var answers=this.state.answers;
  if(event.target.name==='answer1'){
    answers.answer1=event.target.value;
  }else if(event.target.name==='answer2'){
    answers.answer2=event.target.value;
  }else if(event.target.name==='answer3'){
    answers.answer3=event.target.value;
  }else if(event.target.name==='answer4'){
    answers.answer4=event.target.value;
  }else if(event.target.name==='answer5'){
    answers.answer5=event.target.value;
  }else if(event.target.name==='rate'){
    answers.rate=event.target.value;
  }
}
  nameSubmit(event){
    var userName=this.refs.name.value;
    var bookName=this.refs.names.value;
    var  bookbought=this.refs.bookbought.value;
    var experience=this.refs.experience.value;
    var info=this.refs.info.value;
    var userbookname=this.refs.userbookname.value;
    var userbooklink=this.refs.userbooklink.value;

    this.setState({
      userName:userName,
      bookName:bookName,
      bookbought:bookbought,
      info:info,
      experience:experience,
      userbookname:userbookname,
      userbooklink:userbooklink
    });


  }

  constructor(props){
    super(props);

    this.state = {
      uid:uuid.v1(),
      userName:'',
      answers:{
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:'',
        answer5:'',
        rate:''
      },

      bookName:'',
      experience:'',
      bookbought:'',
      info:'',
      userbookname:'',
      userbooklink:'',
      issubmitted:false

    };

  }
  render(){

    var userName;
    var qwestions;
    if(this.state.userName===''&&this.state.issubmitted===false){

      userName=<div>
    <center>
      <h1 id="login">Successfully Logged In</h1>
        <h1>Here are some qwestions regarding our website</h1>
        <form onSubmit={this.nameSubmit.bind(this)}>



          <div className="card">
            <label>Provide Your name </label><br/>
          <input type="text" className="namy" ref="name"  placeholder="Your Name"/><br/>
          </div>


              <div className="cards">
                <label>How was your experience on our website </label><br/>
            <input type="text" className="namy" ref="experience"  placeholder="awesome good average"/><br/>
            </div>


            <div className="card">
              <label>which was the last book you studied  from our website   </label><br/>
            <input type="text" className="namy" ref="names"  placeholder="enter book name"/><br/>
            </div>


            <div className="cards">
              <label> which was the last book you bought  from our website  </label><br/>
            <input type="text" className="namy" ref="bookbought"  placeholder="enter book name"/><br/>
            </div>


            <div className="card">
              <label>How did you know about our website    </label><br/>
            <input type="text" className="namy" ref="info"  placeholder=""/><br/>
            </div>

            <div className="cards">
              <label>Any book you need which we don't have </label><br/>
            <input type="text" className="namy" ref="userbookname"  placeholder=""/><br/>
            </div>

            <div className="card">
              <label>Want your books to be read by others in e-Book section then provide us link </label><br/>
            <input type="text" className="namy" ref="userbooklink"  placeholder=""/><br/>
            </div>


            <input  className="btn btn-danger btn-lg" type="submit" value="next"/>

      </form>
</center>

    </div>
qwestions='';

  }else if(this.state.userName!==''&&this.state.issubmitted===false){
    userName=<div>
        <h2>Hey {this.state.userName}Here are some tick marks  </h2>
    </div>
    qwestions=<div>
      <center>
        <form onSubmit={this.qwestionSubmit.bind(this)}>

            <div className="card">
              <label>was our website helpful to you</label><br/>
                <input type="radio"  name="answer1" value="yes" onChange={this.answerSelected.bind(this)} />Yes
                <input type="radio"  name="answer1" value="NO" onChange={this.answerSelected.bind(this)} />No
                <input type="radio"  name="answer1" value="Somewhat" onChange={this.answerSelected.bind(this)} />Somewhat


            </div>
            <div className="cards">
              <label>which category did you like the most</label><br/>
                <input type="radio"  name="answer2" value="Horror" onChange={this.answerSelected.bind(this)} />Horror
                <input type="radio"  name="answer2" value="Romantic" onChange={this.answerSelected.bind(this)} />Romantic
                <input type="radio"  name="answer2" value="Comedy" onChange={this.answerSelected.bind(this)} />Comedy
                <input type="radio"  name="answer2" value="Others" onChange={this.answerSelected.bind(this)} />Others


            </div>


            <div className="card">
              <label>was our website helpful to you</label><br/>
                <input type="radio"  name="answer3" value="yes" onChange={this.answerSelected.bind(this)} />Yes
                <input type="radio"  name="answer3" value="NO" onChange={this.answerSelected.bind(this)} />No
                <input type="radio"  name="answer3" value="Somewhat" onChange={this.answerSelected.bind(this)} />Somewhat


            </div>
            <div className="cards">
              <label>Did you find any website better than this </label><br/>
                <input type="radio"  name="answer4" value="No" onChange={this.answerSelected.bind(this)} />No
                <input type="radio"  name="answer4" value="Yes" onChange={this.answerSelected.bind(this)} />Yes


            </div>

            <div className="card">
              <label>Did you like our e-Book Section</label><br/>
                <input type="radio"  name="answer5" value="yes" onChange={this.answerSelected.bind(this)} />Yes
                <input type="radio"  name="answer5" value="NO" onChange={this.answerSelected.bind(this)} />No
                <input type="radio"  name="answer5" value="Somewhat" onChange={this.answerSelected.bind(this)} />Somewhat


            </div>
            <div className="cards">
              <label>Rate us out of 5</label><br/>
                <input type="radio"  name="rate" value="5" onChange={this.answerSelected.bind(this)} />5
                <input type="radio"  name="rate" value="4" onChange={this.answerSelected.bind(this)} />4
                <input type="radio"  name="rate" value="3" onChange={this.answerSelected.bind(this)} />3


            </div>


              <input  className="btn btn-danger btn-lg" type="submit" value="Submit"/>
                </form>
                </center>

    </div>

  }  else if(this.state.issubmitted === true) {
    userName=<h1> thanks,{this.state.userName} <br/> for taking our feedback form</h1>

    }




    return(
      <div>
          {userName}
          ------------------------
          {qwestions}

      </div>
    );
  }
}

export default Survey;
