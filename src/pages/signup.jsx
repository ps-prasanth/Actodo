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

    const [error,seterror]=useState(true)

    const [showpass,setshowpass]=useState(false)

    const [showcpass,setshowcpass]=useState(false)

    function handelUinput(event)
    {
      var nname=event.target.value.trim()

      if(nname.length>1){
      
        setenterdusername(nname)
      }
      else{
        setenterdusername("")
      }
    } 

    function handelPinput(event)
    {
       

        var npass=event.target.value.trim()

        if(npass.length>=6){
          setenterdpassword(npass)
        }
        else{
            setenterdpassword("")
        }
    }

    function addUser(e)
    {
        e.preventDefault()
        
        if(enterdusername && enterdpassword){

        setusers([...users,{username:enterdusername,password:enterdpassword}])
        navigate("/")

        }
        else{
        seterror(false)
        }
        
    }

   
    
    

    return (
    <div className="bg-black p-10 ">
        <div className=" bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
           {error? <p> Sign Up here :)</p> : <p className="text-red-500">Password must be 6+ lettors, no spaces only</p>}

            <div className="flex flex-col gap-2 my-2">
                <input
                onChange={handelUinput} 
                type="text" 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="username"
                ></input>

            </div>

            <div className="flex flex-row gap-2 my-2 relative items-center">
                <input 
                onChange={handelPinput}
                type={showpass? "text":"password" }
                className="w-52 p-1 border border-black rounded-md "
                placeholder="password"
                ></input>
            <span  onClick={()=>setshowpass(!showpass)} className="absolute left-44 cursor-pointer">{showpass? "🙈" : "👁️"}</span>

            </div>

            <div className="flex flex-row gap-2 my-2 relative items-center">
                <input 
                type={showcpass? "text":"password" }
                className="w-52 p-1 border border-black rounded-md "
                placeholder="confirmpassword"
                ></input>

               <span  onClick={()=>setshowcpass(!showcpass)} className="absolute left-44 cursor-pointer">{showcpass? "🙈" : "👁️"}</span>

            </div>

            <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
            Sign Up
            </button>

            <p className="my-1">Already have an account?| <Link to={"/"} className="underline">Login</Link></p>
            
        </div>
    </div>)
}
export default Signup

