import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) 
{
   const navigate=useNavigate()

    const users=props.users
    const setusers=props.setusers

    const [enterdusername,setenterdusername]=useState("")
    const [enterdpassword,setenterdpassword]=useState("")

    function handelUinput(event)
    {
      setenterdusername(event.target.value)
    } 

    function handelPinput(event)
    {
      setenterdpassword(event.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:enterdusername,password:enterdpassword}])
        navigate("/")
    }
    

    return (
    <div className="bg-black p-10 ">
        <div className=" bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p> Sign Up here :)</p>

            <div className="flex flex-col gap-2 my-2">
                <input
                onChange={handelUinput} 
                type="text" 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="username"
                ></input>

            </div>

            <div className="flex flex-col gap-2 my-2">
                <input 
                onChange={handelPinput}
                type="text" 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="password"
                ></input>

            </div>

            <div className="flex flex-col gap-2 my-2">
                <input 
                type="text" 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="confirmpassword"
                ></input>

            </div>

            <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
            Sign Up
            </button>

            <p className="my-1">Already have an account?| <Link to={"/"} className="underline">Login</Link></p>

        </div>
    </div>)
}
export default Signup

