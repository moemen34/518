import React, { useState } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Container';
//import Col from 'react-bootstrap/Container';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import axios from 'axios';
//import bootStrapLogo from './bootstrapLogo.svg';


function MyForm() { 
  return (

    <div class="container-fluid">
      <Banner></Banner>
      <br/>
      <div class="row">
        <div class="col-sm-3">
          <ProfilePic></ProfilePic>
        </div>
        <div class="col-sm-8">
          <TextBox></TextBox>
        </div>
      </div>

      <br/>
      <Numbers></Numbers>

    </div>
    
  )

}

function Banner(){
  const str = ' Media Library';

  return(
    
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/#">
        <img src="images/Bootstrap_logo.png" width="45" height="45" alt=""/>
          {str}
      </a>
    </nav>
  )
}



function ProfilePic(){
  return(
    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-left" src="images/pp.jpg" alt="Card pic"/>
      {/*<div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>*/}
    </div>
  )
}

function TextBox(){
  return(
    <div >
      
        
      <div class="form-group">
        <input class="form-control-lg" placeholder="James Smith"/>
        <p></p>
        <textarea class="form-control inputstl" rows="4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
         and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. </textarea>
      </div>
    
    </div>
  )
}

function Numbers(){

  const[number1, setNumber1] = useState(0);
  const[number2, setNumber2] = useState(0);
  const[total, setTotal] = useState(number1+number2);
  const[total2, setTotal2] = useState(0);
  //var url;
  function addNumbers(){
    setTotal(number1 + number2);
    //const getQuote = () => {
      /*axios.get('http://localhost:9000/add/1/and/2')
      .then(res =>{//setTotal2(res.data.content)
        console.log(res)
      }).catch(err => {
        console.log(err)
      })}*/
      
       //url = "http://localhost:9000/add/"+{number1}+"/and/"+{number2};
    fetch(`http://localhost:9000/add/${number1}/and/${number2}`, {
      method: "GET",
      mode: "cors"
    })
    .then((response) => response.json())
    .then((json) => /*console.log(json.Addition)*/ setTotal2(json.Addition))
  
  }

  return(

    <div class="container-fluid">
      <br/>
      <div class="row">
        <div class="col-sm-3">
        <label class="form-label" for="typeNumber1">Enter First Number: </label>
        </div>
        <div class="col-sm-2">
        <input type="number" class="form-control" value={number1} onChange={e => setNumber1(+e.target.value)}/>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-sm-3">
        <label class="form-label" for="typeNumber2">Enter Second Number: </label>
        </div>
        <div class="col-sm-2">
        <input type="number" class="form-control" value={number2} onChange={e => setNumber2(+e.target.value)}/>
        </div>
      </div>
      <br/>
      <button type="button" class="btn btn-primary" onClick={addNumbers}>Submit</button>
      <br/>
      <br/>
      <h4>Your Addition Result (from ReactJS) is: {total}</h4>
      <h4>Your Addition Result (from ReactJS) is: {total2}</h4>  
    </div>


  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);
//root.render(<card/>);
