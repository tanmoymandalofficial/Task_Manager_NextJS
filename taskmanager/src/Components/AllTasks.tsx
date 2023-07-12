"use client"

import { useTodos } from "@/store/Todos"
import {useSearchParams} from "next/navigation"
import { useEffect, useState } from "react";


const AllTasks = () => {
    const {tasks, handleChangeStatus, handleDelete} = useTodos();

    // let filterTodos = tasks;
    const[filterTodos, setfilterTodos] = useState([]);
    const searchParam = useSearchParams();
    const quiryParam = searchParam.get('task');

    // console.log(quiryParam);    
    useEffect(()=>{
        setfilterTodos(tasks)
        if(quiryParam === 'progress'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Progress') )
        }
        else if(quiryParam === 'completed'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Done') )

        }
        else if(quiryParam === 'Todo'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'ToDo') )
        }
    },[quiryParam,tasks])



  return (
    <div>
        <ol>
            {
                filterTodos.map((todo)=>{
                    return (
                    <li key={todo.id}>
                        {todo.task}
                        <select name="" id="" onChange={(e)=>{handleChangeStatus(e.target.value, todo.id)}}>
                            <option value="ToDo" selected={quiryParam === 'Todo'}>ToDo</option>
                            <option value="Progress" selected={quiryParam === 'progress'}>Progress</option>
                            <option value="Done" selected={quiryParam === 'completed'}>Done</option>
                        </select>
                        {todo.description}
                        <button type="button" onClick={()=> handleDelete(todo.id)}>Delete</button>
                    </li>
                    
                    )
                })
            }
        </ol>
    </div>
  )
}

export default AllTasks