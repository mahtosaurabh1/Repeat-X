import React, { useState } from 'react'

let AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    logout:()=>{},
    login:(token)=>{}
})

export let AuthContextProvider=(props)=>{
    let [token,setToken]=useState(null)

    let  userIsLoggedIn= !!token;

    let loginHandler=(token)=>{
        setToken(token)
    }

    let logoutHandler=()=>{
        setToken(null)
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
     return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext