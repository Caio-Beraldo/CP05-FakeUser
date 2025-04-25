import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {

  return (
    <>
      <div className="bg-gray-200 text-xl w-130 p-1 border-2 rounded-md p-1 m-1">
        <Icon icon="streamline:class-lesson-solid" className=""/>
        <span className="">CP5</span>
      
      </div>
      <div className="w-130 p-3 rounded-md shadow-xl m-1 border-1">
        <div className="text-shadow-xl font-bold">
          Fake users list
        </div>
        <hr className="p-2 " />
        {
          [...Array(5).keys()].map((e, idx) => <FakeUser key={idx} />)
        }
      </div>
    </>
  )
}

export default App
