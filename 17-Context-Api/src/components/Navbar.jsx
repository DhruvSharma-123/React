import { useContext } from "react"
import Nav2 from "./Nav2"
import { PostCreateContext } from "../context/ThemeContext"
const Navbar = (props) => {
  // console.log(props)
const data=useContext(PostCreateContext);
  return (
    <div className="nav">
      <h2>Mr vVjT shorts</h2>
       <h2>{data}</h2>
    <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
