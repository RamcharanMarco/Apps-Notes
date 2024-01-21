import {useState} from 'react'
import { useStore } from '../store/store'
import {useNavigate} from 'react-router-dom'
import { api } from '../api/api'

export const useChangePassword = () =>{

    const navigate = useNavigate()

    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<any>(false)

    const {loginuser,user} = useStore()

    const changePassword = async(newPassword:string) =>{
        setLoading(true)
        setError(null)
        const response = await fetch(`${api}/api/user/passwordchange/${user.user._id}`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${user.token}`

            },
            body: JSON.stringify({newPassword})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save user to local storage
            setLoading(false)
            navigate(`/console/${user.user._id}`)
        }
    }

    return {changePassword, loading, error}
}