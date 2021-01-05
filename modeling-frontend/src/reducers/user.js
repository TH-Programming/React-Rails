export function userReducer(state = {isLoggedIn: false, user: {}}, action){
    switch (action.type){
    case ("LOGIN"):
        return {...state, user: action.payload, isLoggedIn: true} 
    
    case ("LOGOUT"):
        return {...state, user: {}, isLoggedIn: false}

    default:
    return state
    }
}