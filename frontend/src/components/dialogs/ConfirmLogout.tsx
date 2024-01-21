import { FC, useState } from "react";
import '../../styles/confirmLogout.scss'
import { useLogout } from "../../hooks/useLogout";

interface AppProps {
  toggleLogout: (params: any) => any;
}

const ConfirmLogout: FC<AppProps> = ({ toggleLogout }) => {
  const { logout } = useLogout();

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="confirmLogout">
      <div className="content">
      <h1>logout</h1>
      <p>are you sure you want to logout</p>
      <div className="logout-buttons">
      <button onClick={toggleLogout}>no</button>
      <button onClick={handleLogout}>yes</button>

      </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
