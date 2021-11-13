import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name="nikhil";
let age="101";
let lastname="patil";
ReactDOM.render(
  
  
  <>
<h1> nikhil patil </h1>
<p> this is my intrested movies </p>
<ol>
  <li> Holiday </li>
  <li> ravan </li>
  <li> bajrangi bhaijan </li>  
  <li> tanaji </li>
</ol>
  <h1> { `this is my name = ${name}  i am don i am dog
   iam cat` }</h1>
  <h1> this is my age = { age} </h1>
  <h1> this is  my lastname { lastname }</h1>
  <h1> { 2+3  }</h1>
    {` hii i am from pune ${name}`}
   
     
      

  </>,
  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
