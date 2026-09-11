import React from 'react'

const Navbar = (props) => {
function change(){
    props.SetTheme("Dark");
}
    return (
    <div>
      <button onClick={change}>Change theme</button>
    </div>
  )
}

export default Navbar
