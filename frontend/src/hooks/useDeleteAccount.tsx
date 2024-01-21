import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";


export const useDeleteAccount = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  const {logoutuser,removeform} = useStore()

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteAccount = async (id: any) => {
    setLoading(true);
    setError(null);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const response = await fetch(`${api}/api/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
    if (response.ok) {
      localStorage.removeItem('contactme')
      logoutuser()
      removeform()
      setLoading(false);
      navigate("/");
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
  };

  return { deleteAccount, loading, error };
};
