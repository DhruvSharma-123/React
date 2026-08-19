import React from "react";
import { Save } from "lucide-react";

function  Ui(props){
return <div className="Uip">
<div className="uione">
    <img  src={props.image}/>
    <button id="bone">Save  <Save size={20} />cla</button>
</div>
<div>
    <span><span className="b">{props.company}</span><small opicity={0.5} >  5 days ago</small></span>
</div>
<div>
    <h5>{props.role}</h5>
</div>
<div id="ps">
   <div className="part">Part Time </div>
   <div className="Senior">Senior Level</div>
</div>  
<br />
<hr />
<span>
<b>{props.price}</b> <button id="btwo">Apply now</button>
<p id="lp">{props.loc}</p>
</span>
</div>
}

export default Ui;