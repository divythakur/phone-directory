import React from 'react';
import { render } from '@testing-library/react';
import Header from "./Header"
import Temp from "./Add-subscriber"
import './Header.css'




function App() {
  let subscriberlist=[
    {
      id:1,
      name:"Shrishti",
      phone:"7894587458"
    },
    {
      id:2,
      name:"shreya",
      phone:"7845784575"
    }

  ]
  return (
    <div>
      <Header/>

      
       <button className="Add-button">Add</button>
      <div>
        <span className="Name-heading">Name </span>
        <span>Phone</span><br />
      </div> 
      {
      
        subscriberlist.map(ele=>{
          return  <div key={ele.id}>
          <span  className="Name-heading">{ele.name} </span>
        <span >{ele.phone}</span>
        <button style={{color:"red",marginLeft:"72px"}}>delete</button>
        </div>
        })
       }
      
     
  
      </div>
  );
}

export default App;
