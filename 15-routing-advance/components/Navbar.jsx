import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex justify-between flex-row bg-cyan-900 px-8 items-center">
      <div className="text-ls font-bold">Mr vVjT </div>
      <div className="flex gap-8    ">
        {/* <a href="/" className="text-lg font-bold">Home</a>
        <a href="/About" className="text-lg font-bold">About</a>
        <a href="/Product" className="text-lg  font-bold">Product</a> */}
        <Link to="/" className="text-lg font-bold">Home</Link>
        <Link to="/About" className="text-lg font-bold">About</Link>
         <Link to="/Product " className="text-lg font-bold">Product</Link>

      </div>
    </div>
  )
}

export default Navbar
