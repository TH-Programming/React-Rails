export function blogReducer(state = {blogs:[]}, action){
    switch (action.type){
    case ("GET_BLOGS"):
        console.log({...state, blogs: action.payload})
        return {...state, blogs: action.payload} 

    case ("NEW_BLOG"):
        return {...state, blogs: state.blogs.concat(action.payload)}

    case ("DELETE_BLOG"):
        return {...state, blogs: state.blogs.filter(blog => blog.id !== action.payload.id)}

    default:
    return state
    }
}