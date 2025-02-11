import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



function Login(props)
{  
     const navigate = useNavigate()

    const [enterdusername,setenterdusername]=useState("")
    const [enterdpassword,setenterdpassword]=useState("")
    const [ruser,setruser]=useState(true)

    const [pass,setpass]=useState(false)

    const users=props.users
    const setusers =props.setusers 

    function handelUinput(event)
    {
      setenterdusername(event.target.value)
    } 

    function handelPinput(event)
    {
      setenterdpassword(event.target.value)
    }

    function checkuser()
    {       
        var userfound =(false)     

        users.forEach(function(item){
            if(item.username ===enterdusername && item.password===enterdpassword)
            {
                console.log("login successfull")
                userfound=(true)
                navigate("/landing",{state:{user:enterdusername}})
            }
            
        })
        if(userfound==false)
        {
            console.log("loginfailed")
            setruser(false)
        }
    }
  

    return(
        <div className="bg-black p-10 ">
        <div className=" bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>

            {ruser?  <p> I help you manage your activities after you login :)</p>:<p className="text-red-500">Please  Sign Up Before you Login</p>}
           

            <div className="flex flex-col gap-2 my-2">
                <input 
                onChange={handelUinput}
                type="text" 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="username" >
                </input>

            </div>

            <div className="flex flex-row gap-2 my-2 relative items-center">
                <input 
                onChange={handelPinput}
                type={pass? "text":"password"} 
                className="w-52 p-1 border border-black rounded-md "
                placeholder="password"
                ></input>
   
            <span  onClick={()=>setpass(!pass)} className="absolute left-44 cursor-pointer">{pass? "🙈" : "👁️"}</span>
              

            </div>

           

            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>
             Login
            </button>

            <p className="my-1">Don't have an account?| <Link to={"/signup"} className="underline">Sign Up</Link></p>

        </div>
    </div>
    )
}
export default Login

