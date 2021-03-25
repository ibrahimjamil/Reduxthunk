const initialState=[
    {
        name:"",
        email:""
    }
]

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            return[
                ...state,
                {name:action.payload.name,email:action.payload.task}
            ]
        case "DELETE":
            return [
                ...state.filter(index => index.name !== action.payload.name)
            ]
        default:
            return state
    }
}

