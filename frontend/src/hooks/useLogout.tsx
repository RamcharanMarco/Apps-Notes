import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { logoutuser, removeform } = useStore();
  const navigate = useNavigate();

  const logout = () => {
    logoutuser();
    removeform();
    navigate("/login");
    document.body.style.height = "100vh";
    document.body.style.overflowY = "scroll";
  };

  return { logout };
};
