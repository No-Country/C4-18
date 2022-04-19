
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
                nombre: response.user.nombre,
                userId: response.user._id,
                correo: response.user.correo,
                rol: response.user.rol,
                avatar: response.user.avatar[0],
                telefono: response.user.telefono
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
                    'Content-Type': 'application/json'                    
                },
            }).then(res => res.json()).then(res => res.data)

            setUserStorage({     
                token: response.token,
                nombre: response.user.nombre,
                userId: response.user._id,
                correo: response.user.correo,
                rol: response.user.rol,
                avatar: response.user.avatar[0],
                telefono: response.user.telefono
            })
            
            
        } catch (error) {
            console.log("ERROR EN SIGNUP: ", error)      
        }
    }
    const getUser = ()=>{}
    const updateUser = ()=>{}


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

