export function userReducer(state = {isLoggedIn: false, user: {admin: false}}, action){
    switch (action.type){
    case ("LOGIN"):
        return {...state, user: action.payload, isLoggedIn: true} 
    
    case ("LOGOUT"):
        return {...state, user: {admin: false}}

    default:
    return state
    }
}