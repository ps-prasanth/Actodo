import { useState } from "react"



function AddTodoForm(props)
{ 

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
   
    const [newactivity,setnewactivity]=useState("")

    function handelChange(event)
    {
        var nactivity=event.target.value.trim()

        if (nactivity.length>=1){
           
            setnewactivity(nactivity)

        }
        else{
            setnewactivity("")
        }

       
    }

    function addactivity()
    {
        if(newactivity)
        {
            setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])

            setnewactivity('')

        }
        else{
            alert("type your activity")
        }
      
    }


    return( 

        <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium ">Manage Activites</h1>

                <div>
                    <input value={newactivity} onChange={handelChange} type="text" placeholder="Next Activity?"className=" border border-black  p-1  " ></input>
                    <button onClick={addactivity} className="bg-black text-white border border-black p-1" >Add</button>
                </div>

            </div>
    )
}

export default AddTodoForm