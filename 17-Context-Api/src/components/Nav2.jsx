import { useContext } from "react"
import { PostCreateContext } from "../context/ThemeContext"


const Nav2 = (prop) => {
const data=useContext(PostCreateContext);

  return (
    <div className='nav2'> 
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>{data}</h4>
      <h4>{prop.theme}</h4>
    </div>
  )
}

export default Nav2
