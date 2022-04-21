
import { useContext, createContext, useState, useEffect } from "react";


export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children})=>{

    const [userSession, setUserSession] = useState(null)

    useEffect(() => {        
        if(sessionStorage.getItem("user")) {
            getUserStorage()
            console.log("Usuario racargado")
        }else{
            console.log("No hay ningun usuario")
        }
    }, [])    

    const setUserStorage = (user)=>{
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user))
            setUserSession(user)
        }        
    }
    const getUserStorage = () => {
        setUserSession(JSON.parse(sessionStorage.getItem("user")))        
    }

    const signInUser = async (values)=>{
       
        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'                    
                },
            }).then(res => res.json()).then(res => res.data)

            
            setUserStorage({
                token: response.token,
                ...response.user
            })  

        } catch (error) {
            console.log("ERROR EN SIGNIN: ", error)      
        }
    }
    const signUpUser = async (values)=>{
        
        try {
            const response = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',                    
                },
            }).then(res => res.json()).then(res => res.data)

            
            setUserStorage({     
                token: response.token,
                ...response.user
            })
            
            
        } catch (error) {
            console.log("ERROR EN SIGNUP: ", error)      
        }
    }

    const getUser = async ()=>{
        try {
            const response = await fetch(`http://localhost:8000/api/usuario/_id/${userSession._id}`, {
                method: "GET",                
                headers: {
                    'Content-Type': 'application/json',                    
                },
            }).then(res => res.json()).then(res => res.user)

            console.log("RESPUESTA EN GET USER: ", response[0])
            
            setUserStorage({     
                token: userSession.token,
                ...response[0]
            })
            
            
        } catch (error) {
            console.log("ERROR EN SIGNUP: ", error)      
        }
    }

    const updateUser = async (values, img)=>{
        console.log("UPDATEUSER", values)
        try { 
            const headers = !img ? {
                'Content-Type': 'application/json',
                'Authorization': userSession.token                    
            } : {'Authorization': userSession.token}      
        const response = await fetch(`http://localhost:8000/api/usuario/${userSession._id}`, {
                method: "PUT",
                body: !img ? JSON.stringify(values) : values,
                headers: headers,
            }).then(res => res.json()).then(res => res.data)
        
        console.log("Respuesta en updateUser: ", response)
        getUser();
    } catch (error) {
        console.log("UPDATE ERROR: ", error)   
    }
    }


    return(
        <UserContext.Provider
            value={{
                getUser,
                updateUser,
                signInUser,
                signUpUser,
                userSession
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

