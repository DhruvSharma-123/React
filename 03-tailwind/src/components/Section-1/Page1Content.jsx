import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = () => {
  return (
    <div  className="h-[90vh] px-18 py-10 flex gap-10 items-center bg-gray-200">
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
