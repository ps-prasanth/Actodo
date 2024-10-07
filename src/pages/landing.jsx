import Heder from "../components/header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"

import { useLocation } from "react-router-dom"

function Landing()
{
    const data=useLocation()

    return(<div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/*heder*/}
          <Heder name={data.state.user} />
  
          {/*card*/}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
            <Card bgcolor={"#FD6663"} title={"October"} subtitle={"1 one"} />
            <Card bgcolor={"#FCA201"} title={"Built Use"} subtitle={"React"} />
  
          </div>
  
          {/*todocontainer*/}
          <TodoContainer />
  
        </div>
      </div>)
}

export default Landing