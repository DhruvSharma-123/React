import React from 'react'

const App = () => {
  //Local storage is the storage of browser in which if one time data is saved then it will save permanentaly until you remove it.like your login your account
  // localStorage.clear();                               //Clear whole storage 
  // localStorage.setItem("Name","Dhruc Sharma");        //Set Element in storage 
  // localStorage.setItem("Age",18 );
  // let name=localStorage.getItem("Name");            //Get element from local storage 
  // console.log(name);
  // localStorage.removeItem("Name");                 //Remove particular item
 
 
 //In Local Storage data is store in the form of string 
 //So we learn how obj saved in local strorage
 const data={
  name:"Dhruv Sharma",
  age:18,
  Branch:"A.I.M.L"
 } 
 localStorage.setItem("data",JSON.stringify(data));                   //JSON.stringify-convert obj to string
 let dataacc=JSON.parse(localStorage.getItem("data"));                //JSON.parse-vice versa
 console.log(dataacc)
 
 
  return (
    <div>
        App.

    </div>
  )
}

export default App
