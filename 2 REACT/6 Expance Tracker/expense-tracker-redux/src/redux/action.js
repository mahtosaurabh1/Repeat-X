
export const logoutCreator = ()=>{
    return{
        type:"LOGOUT",
    }
}

export const loginCreator = (value)=>{
    return{
        type:"LOGIN",
        user:value
    }
}