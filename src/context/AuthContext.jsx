import { Children, createContext, useState } from "react";


const AuthContext = createContext(null)

    export function AuthContextProvider({Children}){
        const [user ,setUser] = useState(null);
        const [ profile, setProfile] = useState(null);  
        const [isLoading, setIsLoading] = useState(false);
    }
