import React, { useState } from "react"
import {Task} from '../interfaces/Task'
export const TaskList = ()=>{
    const [tasks , setTasks] = useState<Task[]>([]);

    const handleAddTask=(e:React.FormEvent)=>{
        e.preventDefault(); //evita que el form recargue la pagina.

        if(!)
    }
    
    return(
        <div>
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text" />
                <label htmlFor="">Description</label>
                <input type="text" />
                <label htmlFor="">completed</label>
                <input type="checkBox" />
                <button type ="submit" onClick={handleAddTask}>Add</button>
            </form>
        </div>
    );
}