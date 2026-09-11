import { createContext } from "react"

export const PostCreateContext=createContext()


const ThemeContext = (props) => {
  return (
    <div>
        <PostCreateContext value="Keshav">{props.children}</PostCreateContext>
      
    </div>
  )
}

export default ThemeContext
