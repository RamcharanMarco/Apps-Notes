import Router from "./router/Router"
import { useEffect, useState } from "react"

const App = () => {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(false)
    setTimeout(()=>{
      setLoading(false)
    },10000000)
  },[])

  return (
    <>
    {
      loading ? <div className="loading">
        <h1>CONTACT ME</h1>
        <p>Coming soon</p>
      </div>
      : <Router/>
    }
    </>
  )
}

export default App