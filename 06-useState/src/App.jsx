// import React, { useState } from 'react'

// const App = () => {
//   const [a,NewA]= useState(18)
//   function change(){
//     NewA(50);
//   }
//   return (
//     <div>
//       <h2>My age is {a}</h2>
//       <button onClick={change}>Change</button>
//     </div>
//   )
// }

// export default App



//MINI Projesct
import React, { useState } from 'react'

const App = () => {
const [num,NewNum]=useState(0);
function increase(){
  NewNum(num+1);
}
function decrease(){
  NewNum(num-1);
}
function JumpBy5(){
  NewNum(num+5);

}
function reset(){
  NewNum(0);
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}>Decrease</button>
    <button onClick={JumpBy5}>Jump by 5</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App

