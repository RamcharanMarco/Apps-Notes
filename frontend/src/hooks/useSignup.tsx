import {useState} from 'react'
import { useStore } from '../store/store'
import {useNavigate} from 'react-router-dom'
import { api } from '../api/api'

export const useSignup = () =>{

    const navigate = useNavigate()

    const [error, setError] = useState<any>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const {loginuser} = useStore()

    const signup = async(email:string,password:string) =>{
        setLoading(true)
        setError(false)
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
        const response = await fetch(`${api}/api/auth/signup`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
            document.body.style.height = "100vh";
            document.body.style.overflowY = "scroll";
        }
        if(response.ok){
            localStorage.setItem('cm', JSON.stringify(json))
            loginuser(json)
            setLoading(false)
            navigate(`/console/${json.user._id}`)
            document.body.style.height = "100vh";
            document.body.style.overflowY = "scroll";
        }
    }

    return {signup, loading, error}
}
