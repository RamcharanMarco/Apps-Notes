import { Outlet } from "react-router-dom"
import UserNavbar from "../UserNavbar"

const UserLayout = () => {
  return (
    <div className="mainLayout">
        <UserNavbar/>
    <Outlet/>
    </div>
  )
}

export default UserLayout