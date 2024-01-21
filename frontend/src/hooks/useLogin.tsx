import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const useLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { loginuser } = useStore();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(false);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const response = await fetch(`${api}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
    if (response.ok) {
      console.log(json);
      loginuser(json);
      localStorage.setItem("cm", JSON.stringify(json));
      setLoading(false);
      navigate(`/console/${json.user._id}`);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
  };

  return { login, loading, error };
};
