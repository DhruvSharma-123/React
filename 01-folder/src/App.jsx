import React from 'react'
import Card from "./component/card"
import Navbar from "./component/navbar"
import spider from "./assets/spider.avif";
import Ui from "./component/ui";

const App = () => {
  // let arr=[10,20,30,40];

   const freelancers = [
    {
        company: "Microsoft",
        role: "Senior UX/UI Designer",
        rate: "$120/hr",
        location: "Mumbai, India",
        image: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
    },
    {
        company: "Google",
        role: "Software Engineer",
        rate: "$150/hr",
        location: "Bangalore, India",
        image: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
    },
    {
        company: "Amazon",
        role: "Cloud Engineer",
        rate: "$135/hr",
        location: "Delhi, India",
        image: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128"
    },
    {
        company: "Apple",
        role: "Product Designer",
        rate: "$140/hr",
        location: "Pune, India",
        image: "https://www.google.com/s2/favicons?domain=apple.com&sz=128"
    },
    {
        company: "Adobe",
        role: "Frontend Engineer",
        rate: "$110/hr",
        location: "Hyderabad, India",
        image: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128"
    },
    {
        company: "Meta",
        role: "UX Researcher",
        rate: "$125/hr",
        location: "Gurgaon, India",
        image: "https://www.google.com/s2/favicons?domain=meta.com&sz=128"
    },
    {
        company: "Netflix",
        role: "Backend Engineer",
        rate: "$160/hr",
        location: "Ahmedabad, India",
        image: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128"
    },
    {
        company: "IBM",
        role: "Data Engineer",
        rate: "$115/hr",
        location: "Chennai, India",
        image: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128"
    },
    {
        company: "Tesla",
        role: "AI/ML Engineer",
        rate: "$145/hr",
        location: "Noida, India",
        image: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128"
    },
    {
        company: "Salesforce",
        role: "Product Designer",
        rate: "$130/hr",
        location: "Kolkata, India",
        image: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128"
    }
];
  return (
    <div id="parent">
     {/* <Card user="Dhruv Sharma" age={18} img={spider}/>
     <Card  user="Keshav Sharma" age={18} img="https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   */}
{/* <Ui/> */}
{/* {arr.map(function(elem){
  return elem;
})} */}

{freelancers.map(function(elem){
  return <Ui company={elem.company} role={elem.role} image={elem.image} price={elem.rate} loc={elem.location}  />;
})}



    </div>
  )
}

export default App

