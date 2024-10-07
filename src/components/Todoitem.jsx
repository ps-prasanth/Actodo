function Todoitem(props)
{
    const activityArr=props.activityArr

    const setactivityArr=props.setactivityArr

    function handelDelet(deletid)
    {
       var temparr=activityArr.filter(function (item){
             if(item.id==deletid){
                return false
             }
             else{
                return true
             }
       })

       setactivityArr(temparr)
  
    }

    return(
        <div className="flex justify-between" >
         <p>{props.index+1}. {props.item.activity}</p>
         <button className="text-red-600" onClick={()=>handelDelet(props.id)}>delet</button>
        </div>
    )
}
export default Todoitem