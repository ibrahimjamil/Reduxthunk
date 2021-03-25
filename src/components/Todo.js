import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addAction, fetchApi} from './Actions/Actions'
import {deleteTaskaction} from './Actions/Actions'

function Todo() {
    
    const [name,setName]=useState('')
    const [task,setTask]=useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApi())
    }, [])
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const taskHandler=(e)=>{
        setTask(e.target.value)
    }
    const submitHandler=(e)=>{
        dispatch(addAction(name,task))
        setName("")
        setTask("")
        e.preventDefault()
    }
    const deleteHandler=(name)=>{
        console.log(name)
        dispatch(deleteTaskaction(name))
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" value={name} onChange={nameHandler}></input><br/>
                <label>Task</label>
                <textarea type="text" value={task} onChange={taskHandler}></textarea><br/>
                <button type="submit">submit</button>
            </form>
            {state.map((index)=>{
                return <h1>name :{index.name} todo :{index.email}<button onClick={()=>deleteHandler(index.name)}>delete</button></h1>
            })}
        </div>
    )
}


export default (Todo)
