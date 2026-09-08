import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate=useNavigate();
  const btnClick=()=>{
navigate("/")
  }
  const back=()=>{
    navigate(-1);
  }
  return (
    <div>
      <button className="bg-emerald-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95" onClick={btnClick}>Return To Home</button>
            <button className="bg-emerald-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 ml-5" onClick={back}>Back</button>
   <button className="bg-emerald-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 ml-5" onClick={()=>{navigate(+1)}}>Next</button>

      <h1>About</h1>
    </div>
  )
}

export default About
