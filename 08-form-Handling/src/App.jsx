import React from 'react'

const App = () => {
function onsubmit(e){
  e.preventDefault();                                                            //It will prevent form whole page rendering
  console.log("Form is Subbmitted")
}
  return (
    <div>
      <form onSubmit={(e)=>{
        onsubmit(e);
      }}> 
    <input type="text" placeholder='Enter Something here' />
    <button>Submit</button>
</form>
    </div>
  )
}

export default App
