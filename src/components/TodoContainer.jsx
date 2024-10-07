import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"


function TodoContainer()
 {
    const [activityArr, setactivityArr] = useState([
        
    ])

    return (

        <div>

            <div className="flex gap-5 flex-wrap">

                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>

                <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />

            </div>

        </div>

    )
}

export default TodoContainer