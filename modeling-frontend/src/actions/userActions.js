

export const signUp = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: data})
        })
        .then(resp => resp.json())
        .then(jsonresp => {
            debugger
            dispatch({type: "LOGIN", payload: jsonresp}
            )
        })
        .catch(err => console.log(err))

    }
}

export const logIn = (data) => {
    return (dispatch) => {
        fetch ('http://localhost:3001/sessions/new', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: data})
        })
          .then(resp => resp.json())
          .then(jsonresp => {
              debugger
              dispatch({type: "LOGIN", payload: jsonresp})
          })
          .catch(err => console.log(err))
    }
}

export const logout = (dispatch) => {
    dispatch({type: "LOGOUT"})
} 