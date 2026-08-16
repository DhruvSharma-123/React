// function Card(){
//     return "HMM.";
// }
import React from "react";

function Card(props){
    console.log(props);
    return <div className="prop">
    <img src={props.img} alt="Spider man" />
<h3>{props.user}</h3>       
      <h4>{props.age}</h4>
      </div>
}

export default Card; 