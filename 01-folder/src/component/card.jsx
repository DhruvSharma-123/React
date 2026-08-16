// function Card(){
//     return "HMM.";
// }
import React from "react";
import spider from "../assets/spider.avif";
function Card(props){
    console.log(props);
    return <div className="prop">
    <img src={spider} alt="Spider man" />
<h3>{props.user}</h3>       
      <h4>{props.age}</h4>
      </div>
}

export default Card; 