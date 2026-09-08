import { Link, Outlet } from "react-router-dom"
const Product = () => {
  return (
    <div>
     
      {/* <a href="/product/Mens">Check Mens</a>
      <a href="/product/Women">Check Women</a> */}
      <div className="text-center">
<Link to='/product/Mens' className="text-2xl font-semibold relative right-5">Mens</Link>
<Link to='/product/Women' className="text-2xl font-semibold">Women</Link>
<Link to="/product/kids" className="text-2xl font-semibold relative left-5">Kids</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default Product
