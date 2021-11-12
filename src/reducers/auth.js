const authState={}

const authReducer = (state=authState,action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                uid:action.uid,
                userName:action.displayName
            }
        case 'LOGOUT':
            return {}   
        default:
            return state
    }
}

export default authReducer
