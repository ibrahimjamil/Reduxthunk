import axios from 'axios'


export const addAction=(name,task)=>{
    return {
        type:"ADD",
        payload:{
            name:name,
            task:task
        }
    }
}

export const deleteTaskaction=(name)=>{
    return {
        type:"DELETE",
        payload:{
            name:name
        }
    }
}

export const fetchApi=()=>async(dispatch)=>{
    let in1=1
    while(in1<10){
        const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${in1}`)
        dispatch({type:"ADD",payload:{name:response.data.name,task:response.data.email}})
        in1++
    }
}