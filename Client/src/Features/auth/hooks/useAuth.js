import {login,register,getMe,logout} from "../services/auth.api"
import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.context"

export const useAuth=()=>{
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context


    async function handleRegister({username,email,password}){
        try {
            setLoading(true)
            const data=await register({username,email,password})
            setUser(data.user)
        } catch (error) {
            console.error("Register failed:", error)
            throw error
        } finally {
            setLoading(false)
        }
    }
    async function handleLogin({username,email,password}){
        try {
            setLoading(true)
            const data=await login({username,email,password})
            setUser(data.user)
        } catch (error) {
            console.error("Login failed:", error)
            throw error
        } finally {
            setLoading(false)
        }
    }
    async function handlegetMe() {
        try {
            setLoading(true)
            const data=await getMe()
            setUser(data.user)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("No active session found.")
            } else {
                console.error("Get current user failed:", error)
            }
            setUser(null)
        } finally {
            setLoading(false)
        }
    }
    async function handlelogout(){
        try {
            setLoading(true)
            await logout()
        } catch (error) {
            console.error("Logout failed:", error)
        } finally {
            setUser(null)
            setLoading(false)
        }
    }

    useEffect(()=>{
        handlegetMe()
    },[])
    return({
        user,loading,handleLogin,handleRegister,handlegetMe,handlelogout
    })
}